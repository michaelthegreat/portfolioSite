#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 1) and a time in nanoseconds
# formatted as a string and outputs to stdout all files that have been
# modified since the given time. Paths must be relative to the root of
# the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $time) = @ARGV;

# Check the hook interface version

if ($version == 1) {
	# convert nanoseconds to seconds
	# subtract one second to make sure watchman will return all changes
	$time = int ($time / 1000000000) - 1;
} else {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree;
if ($^O =~ 'msys' || $^O =~ 'cygwin') {
	$git_work_tree = Win32::GetCwd();
	$git_work_tree =~ tr/\\/\//;
} else {
	require Cwd;
	$git_work_tree = Cwd::cwd();
}

my $retry = 1;

launch_watchman();

sub launch_watchman {

	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	    or die "open2() failed: $!\n" .
	    "Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $time bu