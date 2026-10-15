---
title: "How to Format and Install Fedora Linux: A Step-by-Step Guide"
date: "2026-10-15"
summary: "A complete walkthrough on preparing your system, creating a bootable USB, formatting drive partitions, and installing Fedora Linux."
tags: ["\"fedora\"","\"linux\"","\"installation\"","\"tutorial\""]
---

**Fedora Linux** is a powerful, user-friendly, and cutting-edge open-source operating system. Whether you are replacing your current operating system completely or setting up a fresh machine, installing Fedora is a straightforward process. This step-by-step guide walks you through preparing your drive, formatting partitions, and getting Fedora running smoothly.

## What you need to know first

Installing a new operating system involves modifying disk partitions and formatting storage drives. Here are a few essential points to keep in mind before proceeding:

- **Formatting erases all data on the target drive or partition.** Make sure you select the correct drive during installation.
- **You have two main installation routes:**
  1. **Clean Installation:** Erase the entire disk and give full control to Fedora (recommended for beginner and single-OS setups).
  2. **Custom Partitioning:** Manually format and create partitions (`/`, `/home`, `swap`, `/boot/efi`) if you need dual-boot functionality or custom storage setups.

If you plan to dual-boot alongside Windows, make sure to disable **Fast Startup** and **BitLocker** in Windows prior to starting.

## Before you start

- **Back up all critical files.** A wrong disk format choice will result in data loss.
- **A USB flash drive** with at least 8 GB of storage space.
- Charge your laptop or connect your computer to a reliable power source.
- Download the official Fedora Workstation ISO from the official site.
- Download a flash tool like **Fedora Media Writer** or **Etcher** to create the installation media.

## Step 1: Create a bootable Fedora USB drive

1. Plug your USB drive into your computer.
2. Launch **Fedora Media Writer** (or Rufus / BalenaEtcher).
3. Select **Fedora Workstation** as the target OS (or browse to your downloaded `.iso` file).
4. Select your USB flash drive as the destination drive.
5. Click **Write to Disk**. Wait until the process finishes completely.

## Step 2: Boot from the USB drive

1. Insert the bootable USB drive into your computer.
2. Restart your machine and press the boot menu key continuously (typically `F12`, `F11`, `F8`, or `Del` depending on your motherboard).
3. Select your USB drive from the boot options list.
4. Select **Start Fedora Workstation Live** from the boot menu.
5. Once the live desktop loads, click **Install to Hard Drive** on the welcome screen.

## Step 3: Configure language and region

1. Choose your preferred **Language** and **Region/Keyboard layout**.
2. Click **Continue** to move to the **Installation Summary** screen.

## Step 4: Drive selection and disk formatting

1. Click on **Installation Destination** under System settings.
2. Select the target drive where Fedora will be installed.

### Option A: Automatic Formatting (Clean Install)
- Under *Storage Configuration*, leave **Automatic** selected.
- Click **Done**.
- If your disk already contains data, a prompt will ask if you want to reclaim space. Click **Reclaim space**, then select **Delete all** or select individual partitions to erase, and click **Reclaim space**.

### Option B: Custom Partitioning (Advanced Users)
- Select **Custom** under *Storage Configuration* and click **Done**.
- Choose your partitioning scheme (such as **Btrfs** or **LVM**).
- Click the **+** button to create required partitions:
  - `/boot/efi` - **500 MiB** (File System: EFI System Partition)
  - `/boot` - **1 GiB** (File System: `ext4`)
  - `/` (Root) - **30 GiB to 50 GiB** (File System: `btrfs` or `ext4`)
  - `/home` - **Remaining Space** (File System: `btrfs` or `ext4`)
  - `swap` - **4 GB to 8 GB** (optional depending on system RAM)
- Click **Done** and confirm changes by clicking **Accept Changes**.

## Step 5: Begin the installation

1. Double-check your settings on the **Installation Summary** page.
2. Click **Begin Installation**.
3. The installer will format the selected partitions and copy the system files. This process takes 10 to 20 minutes depending on your hard drive speed.
4. Once completed, click **Finish Installation**.
5. Restart your computer and unplug the USB drive.

## Step 6: Post-installation setup

On your first boot, Fedora's setup wizard will launch:

1. Enable or disable **Location Services** and **Automatic Problem Reporting**.
2. Enable **Third-Party Repositories** (recommended for proprietary drivers like NVIDIA and video codecs).
3. Create your local user account and set a strong password.

## Troubleshooting

- **USB drive not booting:** Verify that **Secure Boot** is disabled in your BIOS/UEFI settings or that UEFI boot mode is enabled instead of Legacy/CSM.
- **NVIDIA GPU black screen:** On the GRUB menu during boot, press `e`, append `nomodeset` to the kernel line starting with `linux`, and press `Ctrl+X` to boot. Install official drivers post-installation.
- **WiFi adapter not recognized:** Connect via Ethernet or USB tethering from a mobile phone to run updates and fetch required kernel modules via `sudo dnf update`.

## Takeaways

- Creating a bootable USB drive using Fedora Media Writer ensures a clean setup.
- Automatic disk partitioning is ideal for beginners; custom partitioning provides precision control over storage partitions like `/home` and `/boot`.
- Always back up important data before disk formatting.