---
layout: default
---

# System Documentation

Below are some useful resources for various popular systems. If you're unsure what you want to work on I recommend starting with a CHIP-8 tutorial, of which there are many (just Google it). After that, move to whatever system you want to. You don't need to "work your way up" to it or whatever as many seem to think. ([relevant thread](https://goo.gl/CAvrd4)). Just make sure you have the basics down first, remember to study the source code of existing emulators (super important) and if you get stuck, ask questions on our [discord](https://discordapp.com/invite/dkmJAes) or in the [emudev subreddit](https://reddit.com/r/EmuDev).

## CHIP-8
- http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
- https://github.com/tomdaley92/Kiwi8/issues/9
- https://cdn.discordapp.com/attachments/465586212804100106/482263582793531423/BC\_test.txt
- https://cdn.discordapp.com/attachments/465586212804100106/482263586547302426/BC\_test.ch8
- https://cdn.discordapp.com/attachments/465586212804100106/482263592696152074/ELF\_CHIP-8\_Interpreter.pdf
- https://bit.ly/2Xl4sjo

## Pacman
- https://drive.google.com/file/d/1Pnvl53-8VnJs7yo-fyd1ayNBo\_ZSBiS7/view

## Intel 8080/Space Invaders
- http://altairclone.com/downloads/cpu\_tests (needs cp/m implementation to work)
- https://www.seasip.info/Cpm/bdos.html (for a cp/m implementation, not needed for Space Invaders)
- http://computerarcheology.com/Arcade/SpaceInvaders
- http://www.emutalk.net/threads/38177-Space-Invaders (for the pdf download) 
- http://emulator101.com/ (8080 reference & tutorial)
- http://www.brentradio.com/SpaceInvaders.htm
- https://github.com/ThePixelGamer/Space-Invaders-Tester

## Game Boy (GB)
- https://github.com/avivace/awesome-gbdev
- https://izik1.github.io/gbops/table/table.html
- https://www.reddit.com/r/EmuDev/comments/5gkwi5/gb\_apu\_sound\_emulation/dat3zni
- https://rednex.github.io/rgbds/gbz80.7.html
- https://github.com/AntonioND/giibiiadvance/blob/master/docs/TCAGBD.pdf
- https://ehaskins.com/2018-01-30%20Z80%20DAA
- https://robdor.com/2016/08/10/gameboy-emulator-half-carry-flag

## Game Boy Advance (GBA)
- https://problemkaputt.de/gbatek.htm
- https://www.nogba.com/no$gba-download.htm (get the debug version)
- https://github.com/Emu-Docs/Emu-Docs/tree/master/Game%20Boy%20Advance
- http://vision.gel.ulaval.ca/~jflalonde/cours/1001/h17/docs/arm-instructionset.pdf (ARM)
- https://ece.uwaterloo.ca/~ece222/ARM/ARM7-TDMI-manual-pt3.pdf (THUMB)
- http://datasheets.chipdb.org/ARM/arm.pdf (for ARMv4)
- http://infocenter.arm.com/help/topic/com.arm.doc.ddi0210c/DDI0210B.pdf
- https://rust-console.github.io/gba/ and https://patater.com/gbaguy/gbaasm.htm (for homebrew mainly)
- https://mgba.io/tag/emulation/ and https://mgba.io/tag/development/ (blog posts)

## Nintendo Entertainment System (NES)
- http://nesdev.com/NES%20emulator%20development%20guide.txt
- https://yizhang82.dev/nes-emu-overview
- http://wiki.nesdev.com/w/index.php/Nesdev\_Wiki

## PlayStation (PS1/PSX)
- https://github.com/simias/psx-guide (Guide to get you started. Rendered pdf: https://goo.gl/z5zQ2W)
- https://problemkaputt.de/psx-spx.htm (Most complete source of info)
- http://wiki.psxdev.ru/index.php/BIOS (translated: https://goo.gl/cDyVGq)
- http://emulation.gametechwiki.com/index.php/PS1\_Tests (see link below on how to load them)
- http://www.emulatronia.com/doctec/consolas/psx/exeheader.txt (also see "CDROM File Formats" section in psx-spx)
- http://hitmen.c02.at/files/docs/psx/3467.pdf CPU Reference Manual (if you want all the nitty gritty)
- https://github.com/ogamespec/psxdev/tree/master/reverse
- http://hitmen.c02.at/html/psx\_docs.html
- http://www.raphnet.net/electronique/psx\_adaptor/Playstation.txt
- https://github.com/ogamespec/pops-gte (GTE info)
- https://github.com/m35/jpsxdec/blob/readme/jpsxdec/PlayStation1\_STR\_format.txt (great MDEC & CDROM info)
- https://github.com/PeterLemon/PSX/tree/master (useful tests in /GPU in particular)
- https://github.com/simias/psx-hardware-tests/tree/master/tests

## PlayStation 2 (PS2)
- http://hwdocs.webs.com/ps2
- https://github.com/ZirconiumX/ps2-clang-patches/blob/master/erratum/unofficial-erratum.md
- http://psx-scene.com/forums/f291/gs-mode-selector-development-feedback-61808/#post457673
- https://assemblergames.com/threads/the-playstation-2-busses-dev9.67961/

## PC/8086
- https://software.intel.com/sites/default/files/managed/39/c5/325462-sdm-vol-1-2abcd-3abcd.pdf (modern but searchable and all in one PDF)
- https://edge.edx.org/c4x/BITSPilani/EEE231/asset/8086\_family\_Users\_Manual\_1\_.pdf (not searchable)

## Sega Master System (SMS)
- http://baltazarstudios.com/zilog-z80-undocumented-behavior
- http://www.smspower.org/Development/MemoryMap
- http://www.smspower.org/Development/Z80-Index (CPU registers, instruction set, etc)
- Cpu Test Program (doesn't require any hardware, it can log to an IO port so you can bootstrap that very easily!) http://www.smspower.org/Homebrew/ZEXALL-SMS
- Video Hardware: http://www.smspower.org/Development/VDPRegisters
- Sound Hardware: http://www.smspower.org/Development/SN76489?from=Development.PSG
- Lots of simple homebrew test cases: http://www.smspower.org/Homebrew/NotOnlyWords-SMS
Commodore 64 (C64):
- https://www.c64-wiki.com/wiki/Main\_Page
