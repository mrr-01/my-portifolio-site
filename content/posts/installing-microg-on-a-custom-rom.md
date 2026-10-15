---
title: "Installing microG on a custom ROM"
date: "2026-10-15"
summary: "What microG is, how to get it on a custom ROM, and how to set it up so push notifications and location work without Google's apps."
tags: ["\"android\"","\"microg\"","\"custom-rom\"","\"privacy\""]
---

Most Android apps expect Google Play Services to be installed. **microG** is an open-source replacement that implements the same interfaces, so those apps keep working on a phone that has no Google apps on it. This is a step-by-step guide to getting it running on a custom ROM.

## What you need to know first

microG has to pretend to be Google Play Services. For that to work, the ROM must support **signature spoofing**. This matters more than anything else in this guide:

- **Most stock custom ROMs do not allow it.** Plain LineageOS, for example, does not.
- **You have two realistic options:**
  1. Install a ROM that already includes microG and signature spoofing. Examples are *LineageOS for microG*, */e/OS*, and *CalyxOS* (Pixel phones only).
  2. Use a ROM that supports spoofing and install microG yourself. This is more fragile and device specific, so I recommend option 1 if you are starting out.

If your phone already runs a custom ROM without spoofing, you will need to reflash. Installing microG on top will not work.

## Before you start

- **Back up everything.** Flashing a new ROM wipes the phone.
- Check that your device is supported, and note its **codename** (for example `dreamlte` or `sunfish`).
- Charge the phone to at least 50 percent.
- Install `adb` and `fastboot` on your computer. On Fedora: `sudo dnf install android-tools`.
- Read the install guide for your exact device on your ROM's website. Steps differ between brands, and Samsung phones use different tools (Odin or Heimdall) instead of fastboot.

Unlocking the bootloader voids some warranties and can trip security features such as Samsung Knox permanently. Do it only if you accept that.

## Step 1: Unlock the bootloader

The exact method depends on the brand. In general:

1. Enable **Developer options** (tap Build number seven times).
2. Turn on **OEM unlocking** and **USB debugging**.
3. Reboot to the bootloader: `adb reboot bootloader`
4. Unlock it: `fastboot flashing unlock` (some devices use `fastboot oem unlock`)

This erases all data.

## Step 2: Download the ROM

Take the build for your device codename from your ROM's official download page, and verify the checksum if one is provided. For LineageOS for microG, download the ROM zip and, if the page lists one, the recovery image.

## Step 3: Install the recovery and flash the ROM

Follow your device's guide for the recovery step. A typical flow on a device that uses fastboot:

```bash
fastboot flash recovery recovery.img
```

Then boot into recovery using the key combination from your guide, and:

1. Choose **Factory reset**, then **Format data**.
2. Choose **Apply update**, then **Apply from ADB**.
3. On your computer, run:

```bash
adb sideload your-rom-file.zip
```

4. When it finishes, reboot the phone. The first boot can take several minutes.

## Step 4: Set up microG

After the setup wizard, open **microG Settings** (it may appear in Settings or as its own app).

1. Tap **Self-Check** and make sure every item has a tick. Common ones that fail:
   - *Signature spoofing*: if this is not ticked, your ROM does not support it.
   - *Battery optimizations*: tap the item and set microG to **Not optimized**.
2. Turn on **Google device registration**.
3. Turn on **Google Cloud Messaging**. This is what delivers push notifications.
4. Under location, enable the backends listed in microG Settings. Mozilla's location service has been wound down, so rely on GPS plus whatever backends your build offers.

Sign in with a Google account is optional. Cloud Messaging works with the device registration alone.

## Step 5: Get your apps

- **F-Droid** is open-source apps. LineageOS for microG ships with it.
- **Aurora Store** gives access to Play Store apps without a Google account on the phone.

## Troubleshooting

- **No push notifications:** check Cloud Messaging is on, microG is excluded from battery optimization, and the app itself is not restricted in the background.
- **Self-Check fails on spoofing:** your ROM does not support it. Reflash a microG-enabled ROM.
- **Maps or location apps misbehave:** some apps need extra location backends, and results vary.
- **Banking apps refuse to run:** many require Google's Play Integrity checks, which microG cannot fully pass. Keep that in mind before switching your only banking phone.

## Takeaways

