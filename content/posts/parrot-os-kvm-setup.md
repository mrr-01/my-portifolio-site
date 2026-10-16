---
title: "Running Parrot OS on Fedora with KVM"
date: "2026-10-16"
summary: "Setting up KVM and virt-manager on Fedora and installing Parrot OS as a virtual machine."
tags: ["kvm", "virtualization", "fedora", "parrot-os", "linux"]
---

Sometimes a container is not enough and you want a full operating system to experiment in. Parrot OS in a KVM virtual machine gives a complete security-focused desktop that can be reset at any time.

## 1. Check hardware support

```bash
lscpu | grep Virtualization
```

You should see `VT-x` (Intel) or `AMD-V`. If not, enable virtualization in the BIOS or UEFI settings.

## 2. Install the virtualization stack

```bash
sudo dnf install @virtualization
sudo systemctl enable --now libvirtd
sudo usermod -aG libvirt $USER
```

Log out and back in so the group change applies. Then open **virt-manager**.

## 3. Create the VM

1. Download the Parrot OS ISO from the official site and verify its checksum.
2. In virt-manager, choose **New virtual machine** and select the ISO.
3. Give it a sensible size, for example 4 GB of RAM, 2 CPUs and a 40 GB disk.
4. Before installing, open the details and use **VirtIO** for disk and network. It is much faster than emulated hardware.

## 4. After installing

Install the SPICE guest tools inside Parrot for clipboard sharing and automatic screen resizing:

```bash
sudo apt install spice-vdagent
```

## 5. Take a snapshot

Create a snapshot of the clean install. When an experiment goes wrong, revert instead of reinstalling.

## NAT or bridged networking

The default NAT network keeps the VM hidden behind your host, which is the safer default. Use bridged networking only when the VM must appear as its own device on your network.

## Lessons

Always snapshot a working state, and use VirtIO drivers for speed. The helper script automates the steps above.
