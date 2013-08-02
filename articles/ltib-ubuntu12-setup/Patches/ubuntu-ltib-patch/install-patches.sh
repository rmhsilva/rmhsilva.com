#!/bin/bash

# This script applies patches for building on Ubuntu 11.10 Oneiric for i.MX35
# using L2.6.31_09.12.01_SDK_source.tar.gz

# Thu Oct 27 08:22:24 PDT 2011
# Curtis Wald


# Usage:
#  ./install-patches.sh ltibDir
# NOTE: The directory ltibDir must be located for the script to work correctly.
#       If the directory is not provided an attempt to guess is tried,
#       then failure with a nice message if not found.
#

# variables
ltibDir="../ltib"
ltibSpec="${ltibDir}/dist/lfs-5.1"
fslpkgs="/opt/freescale/pkgs"

PATCH_FILES="lkc-1.4-lib.patch
lkc-1.4-lib.patch.md5
sparse-0.4-fixlabel.patch
sparse-0.4-fixlabel.patch.md5"

# usage() : give advise on how to run this program
#
usage ()
{
    echo "Usage: `basename $0` [ltibDir]"
    exit -1
}

# check if any arguments were provided
if [ -n "$1" ]
then
    # override the default and use what the user provided
    ltibDir=$1
fi

# must find the ltib directory, otherwise nothing to patch
if [ ! -d $ltibDir ]; then
    echo "Not found"
    usage
fi

# must have /opt/freescale/pkgs dir to copy patches into
if [ ! -d $fslpkgs ]; then
    sudo mkdir -p $fslpkgs
    sudo chmod -R 777 /opt/freescale
fi

# ----------------------------------------
#          Start patch process
# ----------------------------------------

# copy patch packages
for file in $PATCH_FILES
do
    echo "cp $file $fslpkgs"
    cp $file $fslpkgs
done

# patch the spec files
echo "Patching Spec Files"
cp ${ltibSpec}/lkc/lkc.spec ${ltibSpec}/lkc/lkc-orig.spec
cp lkc.spec ${ltibSpec}/lkc/lkc.spec

cp ${ltibSpec}/sparse/sparse.spec ${ltibSpec}/sparse/sparse-orig.spec
cp sparse.spec ${ltibSpec}/sparse/sparse.spec

cp ${ltibSpec}/mux_server/mux_server.spec ${ltibSpec}/mux_server/mux_server-orig.spec
cp mux_server.spec ${ltibSpec}/mux_server/mux_server.spec
echo "Done"

# Create link to libraries if on 64-bit host and they do not exist
if uname -a|grep -sq 'x86_64'; then
	if [ ! -e /usr/include/sys ]; then
		sudo ln -s /usr/include/x86_64-linux-gnu/sys /usr/include/sys
	fi
fi
