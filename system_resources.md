---
layout: default
---

# System Documentation

Below are some useful resources for various popular systems. If you're unsure what you want to work on I recommend starting with a CHIP-8 tutorial, of which there are many (just Google it). After that, move to whatever system you want to. You don't need to "work your way up" to it or whatever as many seem to think. ([relevant thread](https://goo.gl/CAvrd4)). Just make sure you have the basics down first, remember to study the source code of existing emulators (super important) and if you get stuck, ask questions on our [discord](https://discordapp.com/invite/dkmJAes) or in the [emudev subreddit](https://reddit.com/r/EmuDev).

# Systems

## Multiple systems
- https://www.zophar.net/documents.html
- http://emulator101.com
- http://www.codeslinger.co.uk (doesn't respond to https://, disable extensions such as HTTPS Everywhere if it doesn't load)
- https://emudev.de
- https://shonumi.github.io

## CHIP-8
- There are a lot of full tutorials on the Internet, so just searching "chip8 emulator tutorial" and looking for one in your language of choice should be enough if you're looking for a step-by-step guide
- If not, see the References below. There are usually no "full" tutorials for other systems, so it's challenging but more realistic and perhaps more helpful in the long run, assuming you'll want to move on to other systems after CHIP-8
- References:
    - [CHIP-8 technical reference](https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Technical-Reference)
    - [CHIP-8 instruction set](https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Instruction-Set)
    - [Cowgod's Technical Reference (doesn't respond to https://)](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM)
- Test ROMs:
    - BestCoder test:
        - [Description](https://cdn.discordapp.com/attachments/465586212804100106/482263582793531423/BC_test.txt)
        - [ROM](https://cdn.discordapp.com/attachments/465586212804100106/482263586547302426/BC_test.ch8)
    - https://github.com/corax89/chip8-test-rom
    - https://github.com/metteo/chip8-test-rom
    - https://github.com/Skosulor/c8int/tree/master/test
- Other resources:
    - [ROM compatibility issues](https://github.com/tomdaley92/Kiwi8/issues/9)
    - [Writing a CHIP-8 interpreter for the COSMAC ELF](https://cdn.discordapp.com/attachments/465586212804100106/482263592696152074/ELF_CHIP-8_Interpreter.pdf)
    - [COSMAC VIP manual](https://cdn.discordapp.com/attachments/465586212804100106/482263593753247744/VIP_Manual_Game_Manual_I.pdf)

## Bytepusher
- https://esolangs.org/wiki/BytePusher

## Pac-Man
- See [Z80 resources](#z80) below
- [Pac-Man emulation guide](https://www.lomont.org/software/games/pacman/PacmanEmulation.pdf)

## Space Invaders
- See [8080 resources](#8080) below
- [SN76477N technical data](https://web.archive.org/web/20150425030455/http://www.emutalk.net/attachment.php?attachmentid=34143&d=1160668005)
- [General info on Space Invaders](http://www.brentradio.com/SpaceInvaders.htm)
- [Space Invaders disassembly and info](https://computerarcheology.com/Arcade/SpaceInvaders)
- [CPU tests (need a CP/M implementation or to fake it to some extent, see CP/M section and https://discord.com/channels/465585922579103744/466417993912680459/735434453228191794)](https://altairclone.com/downloads/cpu_tests)

## CP/M
- See [8080 resources](#8080) below
- [General CP/M info](https://en.m.wikipedia.org/wiki/CP/M)
- [Zero page breakdown](https://en.m.wikipedia.org/wiki/Zero_page_(CP/M))
- [CP/M BDOS system calls](https://www.seasip.info/Cpm/bdos.html)
- [CP/M Programmer's Guide](https://cdn.discordapp.com/attachments/466417993912680459/735454519701536788/cpm3-pgr.pdf)
- [CP/M-86 System Guide](https://cdn.discordapp.com/attachments/466417993912680459/735455014100926544/CPM-86_System_Guide.pdf)

## Game Boy/Game Boy Color
- [Pandocs](https://gbdev.io/pandocs)
- [The Cycle-Accurate GB Docs](https://github.com/AntonioND/giibiiadvance/blob/master/docs/TCAGBD.pdf)
- [Opcode table](https://izik1.github.io/gbops/table/table.html)
- [List of GB opcodes and their behavior](https://rednex.github.io/rgbds/gbz80.7.html)
- [WIP tutorial on writing a GB emulator in Rust](https://blog.ryanlevick.com/DMG-01/public/book/introduction.html)
- [GameBoy Emulator Development Guide](https://hacktix.github.io/GBEDG)
- Test ROMs:
    - [Blargg's test ROMs](https://github.com/retrio/gb-test-roms)
    - [Mooneye-gb test ROMs](https://github.com/Gekkio/mooneye-gb/tree/master/tests)
    - [dmg-acid (rendering test)](https://github.com/mattcurrie/dmg-acid2)
    - [cgb-acid (rendering test)](https://github.com/mattcurrie/cgb-acid2)
    - [PeterLemon's GB demos](https://github.com/PeterLemon/GB)
- [The Ultimate Game Boy Talk](https://youtu.be/HyzD8pNlpwI)
- [Other valuable resources](https://github.com/avivace/awesome-gbdev)
- [Notes by GhostSonic on GB sound emulation](https://www.reddit.com/r/EmuDev/comments/5gkwi5/gb_apu_sound_emulation/dat3zni)
- [Explanation of binary-coded decimals and the DAA instruction](https://ehaskins.com/2018-01-30%20Z80%20DAA)
- [Guide to the half-carry flag](https://robdor.com/2016/08/10/gameboy-emulator-half-carry-flag)

## Game Boy Advance
- See relevant [ARM resources](#arm) below (the ARM7TDMI used in the GBA implements ARMv4T)
- [GBATEK](https://problemkaputt.de/gbatek.htm)
- [no$gba (get the debug version)](https://problemkaputt.de/gba.htm)
- [TONC (GBA tutorial and demos)](https://www.coranac.com/projects/tonc)
- Test ROMs:
    - [Various test ROMs, including an archive of TONC binaries](https://github.com/shonumi/Emu-Docs/tree/master/GameBoy%20Advance/test_roms)
    - https://github.com/destoer/armwrestler-gba-fixed
    - https://github.com/DenSinH/FuzzARM
    - https://github.com/jsmolka/gba-suite
    - https://github.com/destoer/gba_tests
    - https://github.com/PeterLemon/GBA
    - https://github.com/ladystarbreeze/gba-tests/tree/master/dma-test
- [mGBA blog (particularly the "development" and "emulation" tags)](https://mgba.io)
- Homebrew development:
    - https://rust-console.github.io/gba
    - https://patater.com/gbaguy/gbaasm.htm

## Nintendo DS
- See relevant [ARM resources](#arm) below (the DS uses an ARM7TDMI and an ARM946E-S, implementing respectively ARMv4T and ARMv5TE)
- [GBATEK](https://problemkaputt.de/gbatek.htm)
- [Other docs](https://github.com/shonumi/Emu-Docs/tree/master/Nintendo%20DS)
- Test ROMs:
    - https://github.com/mic-/armwrestler
        - [Built ROM](https://cdn.discordapp.com/attachments/667132407262216272/732206968252661800/armwrestler.nds)
    - https://github.com/Arisotura/arm7wrestler
        - [Built ROM](https://cdn.discordapp.com/attachments/667132407262216272/732206999890165780/arm7wrestler.nds)
    - https://tcrf.net/Aging_Card_NTR
- [Sample homebrew programs](https://github.com/devkitPro/nds-examples)
- [Arisotura's blog (uses self-signed certificate but works with https://)](https://melonds.kuribo64.net)

## Nintendo 3DS
- See relevant [ARM resources](#arm) (the 3DS's ARM11 MPCore implements ARMv6K, not plain ARMv6, so you'll have to look at the ARMv7-AR manual too for the few additions; the ARM9 is the same as on the [Nintendo DS](#nintendo-ds))
- [GBATEK](https://problemkaputt.de/gbatek.htm)
- [The 3DBrew wiki](https://www.3dbrew.org/wiki/Main_Page)

## Nintendo Entertainment System
- [6502 instruction set reference](https://www.masswerk.at/6502/6502_instruction_set.html)
- [The NesDev wiki](https://wiki.nesdev.com)
- [NES emulator development guide](https://nesdev.com/NES%20emulator%20development%20guide.txt)
- [Overview of writing a NES emulator](https://yizhang82.dev/nes-emu-overview)
- [Articles on writing a NES emulator (among other things)](https://emudev.de/nes-emulator/overview)
- [Sample ROMs](https://github.com/PeterLemon/NES)

## Super Nintendo Entertainment System
- [fullsnes](https://problemkaputt.de/fullsnes.htm)
- [65c816 primer]: https://softpixel.com/~cwright/sianse/docs/65816NFO.HTM
- [SNES development wiki](https://wiki.superfamicom.org/):
    - [65c816 CPU reference](https://wiki.superfamicom.org/65816-reference)
    - [SPC-700 APU reference](https://wiki.superfamicom.org/spc700-reference)
- [Test ROMs](https://github.com/PeterLemon/SNES)

## Nintendo 64
- [CPU manual (doesn't respond with the correct file using https://)](http://datasheets.chipdb.org/NEC/Vr-Series/Vr43xx/U10504EJ7V0UMJ1.pdf)
- [Notes and resources](https://github.com/Dillonb/n64-resources)
- [Development resources](https://ultra64.ca/resources/documentation)
- [Info on the N64's boot code](https://www.retroreversing.com/n64bootcode)
- [Test ROMs](https://github.com/PeterLemon/N64)
- [Fork of the above test ROMs, with a few more ones (significantly outdated)](https://github.com/fraser125/N64)
- [RSP docs](https://github.com/rasky/r64emu/blob/master/doc/rsp.md)
- [Other resources](https://n64.dev)

## Nintendo GameCube
- See [PowerPC resources](#powerpc) below
- https://www.gc-forever.com/yagcd/

## PlayStation 1
- [Guide to writing a PSX emulator](https://github.com/simias/psx-guide)
    - [Rendered](https://goo.gl/z5zQ2W)
- [psx-spx](https://problemkaputt.de/psx-spx.htm)
- [PSX reverse engineering project](https://github.com/ogamespec/psxdev/tree/master/reverse)
- [BIOS info](http://wiki.psxdev.ru/index.php/BIOS)
    - [Translated](https://goo.gl/cDyVGq)
- [The PSX GPU texture pipeline and how to emulate it](https://www.reddit.com/r/EmuDev/comments/fmhtcn)
- [PSX EXE header (also see "CDROM File Formats" section in psx-spx)](http://www.emulatronia.com/doctec/consolas/psx/exeheader.txt)
- [PSX system software reverse engineering project](https://github.com/ogamespec/psxdev/tree/master/reverse)
- [Other PSX documentation (including a CPU reference manual)](http://hitmen.c02.at/html/psx_docs.html)
- [PSX GTE docs/reverse engineering](https://github.com/ogamespec/pops-gte)
- [PSX MDEC & CD-ROM info](https://github.com/m35/jpsxdec/blob/readme/jpsxdec/PlayStation1_STR_format.txt)
- [Dithering on the PSX](https://www.youtube.com/watch?v=3XDyQnY5GHI)
- [PlayStation emulator development info](https://drhell.web.fc2.com/ps1/index.html)
    - [Translated](https://translate.google.com/translate?sl=auto&tl=en&u=http%3A%2F%2Fdrhell.web.fc2.com%2Fps1%2Findex.html)
- Test ROMs:
    - [Amidog's tests](https://emulation.gametechwiki.com/index.php/PS1_Tests)
    - https://github.com/PeterLemon/PSX
    - https://github.com/JaCzekanski/ps1-tests
    - https://github.com/simias/psx-hardware-tests/tree/master/tests
    - [PSX demos](https://www.pouet.net/prodlist.php?order=thumbup&platform%5B0%5D=Playstation&page=1)

## PlayStation 2
- [PS2TEK](https://psi-rockin.github.io/ps2tek)
- [PS2 docs](https://web.archive.org/web/20191102085229/https://hwdocs.webs.com/ps2)
- [PS2 unofficial clang erratum](https://github.com/ZirconiumX/ps2-clang-patches/blob/master/erratum/unofficial-erratum.md)
- [GS Mode Selector](https://web.archive.org/web/20191111013442/https://psx-scene.com/forums/f291/gs-mode-selector-development-feedback-61808)
- [PS2 busses](https://web.archive.org/web/20191112223653/https://assemblergames.com/threads/the-playstation-2-busses-dev9.67961)

## Sega Master System
- See [Z80 resources](#z80) below
- [SMS info](https://www.smspower.org/Development)
    - [Memory map](https://www.smspower.org/Development/MemoryMap)
    - [Z80 info](https://www.smspower.org/Development/Z80-Index)
    - [Video Hardware](https://www.smspower.org/Development/VDPRegisters)
    - [Sound Hardware](https://www.smspower.org/Development/SN76489)
- Test ROMs:
    - [Homebrew test cases](https://www.smspower.org/Homebrew/NotOnlyWords-SMS)
    - [ZEXALL test ROM (doesn't require any hardware, it can log to an IO port)](https://www.smspower.org/Homebrew/ZEXALL-SMS)
    - [PeterLemon's SMS demos](https://github.com/PeterLemon/SMS)

## Sega Genesis/Mega Drive
- See [Z80](#z80) and [m68k](#m68k) resources below
- [Collection of docs](https://segaretro.org/Mega_Drive_official_documentation)

## Sega Saturn
- [SH-2 programming manual](https://antime.kapsi.fi/sega/files/h12p0.pdf)

## Commodore 64
- [MCS6500 family programming manual (doesn't respond to https://)](http://archive.6502.org/books/mcs6500_family_programming_manual.pdf)
- [C64 wiki](https://www.c64-wiki.com)
- [VICE test ROMs](https://vice-emu.pokefinder.org/index.php/Testbench)
- [SID manual (doesn't respond to https://)](http://archive.6502.org/datasheets/mos_6581_sid.pdf)
- [C64 assembly language programming](https://www.retro-programming.de)
    - [Translated](https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fwww.retro-programming.de)
- [Scanline missing cycles](http://www.antimon.org/dl/c64/code/missing.txt)
- [Opening the borders](http://www.antimon.org/dl/c64/code/opening.txt)
- [Info on the VIC-II](http://www.zimmers.net/cbmpics/cbm/c64/vic-ii.txt)
- [SID info (doesn't respond to https://)](http://www.oxyron.de/html/registers_sid.html)
- Programming the C64's SID:
    - [Part 1](https://www.atarimagazines.com/compute/issue49/424_1_Programming_64_Sound.php)
    - [Part 2](https://www.atarimagazines.com/compute/issue50/277_1_Programming_64_Sound.php)
- [6502 decimal mode](https://www.atarimagazines.com/compute/issue50/268_1_MACHINE_LANGUAGE.php)
- [The Commodore 64 Music Book](https://archive.org/details/The_Commodore_64_Music_Book)
- [C64 user's guide (start of sound chapter)](https://archive.org/details/Commodore_64_Users_Guide_1984_Commodore/page/n87)

## Mac
- See [m68k](#m68k)/[PowerPC](#powerpc) resources below
- [Apple's guide to the macintosh family hardware (400 MB pdf)](https://archive.org/details/apple-guide-macintosh-family-hardware)

## MSX
- See [Z80 resources](#z80) below
- [Test ROMs](https://github.com/PeterLemon/MSX)

## Amiga
- [Info on the Amiga and "Another World"](https://fabiensanglard.net/another_world_polygons_amiga500/index.html)

## Xbox
- [Xbox architecture](https://www.copetti.org/projects/consoles/xbox)

## Neo Geo
- [Development wiki (has overviews of every piece of hardware)](https://wiki.neogeodev.org/index.php?title=Main_Page)
- [Sample ROMs](https://github.com/PeterLemon/NEO-GEO)

## Pokémon Mini
- https://www.pokemon-mini.net/documentation

## Tamagotchi
- [Tech specs and resources](https://tama.loociano.com)
- [ROM dump and reverse engineering](https://hackaday.com/2013/05/24/tamagotchi-rom-dump-and-reverse-engineering)

# Processors and architectures

## 8080
- [8080 tutorial (among other things)](http://emulator101.com)
- [Assembly programming manual](https://altairclone.com/downloads/manuals/8080%20Programmers%20Manual.pdf)
- [Datasheet](https://altairclone.com/downloads/manuals/8080%20Data%20Sheet.pdf)
- [Instruction table](https://tobiasvl.github.io/optable/intel-8080/classic)
- [Loading test ROMs that require a CP/M implementation/stub](https://discord.com/channels/465585922579103744/466417993912680459/735434453228191794)

## Z80
- [Z80 CPU User Manual](https://www.zilog.com/force_download.php?filepath=YUhSMGNEb3ZMM2QzZHk1NmFXeHZaeTVqYjIwdlpHOWpjeTk2T0RBdlZVMHdNRGd3TG5Ca1pnPT0=)
- [Z80 heaven](http://z80-heaven.wikidot.com/)
- [Z80 instruction table](https://clrhome.org/table/)
- [The undocumented Z80 documented](http://www.z80.info/zip/z80-documented.pdf)
- [Z80 undocumented behavior](https://baltazarstudios.com/zilog-z80-undocumented-behavior)
- [Z80 test ROMs](https://github.com/superzazu/z80/tree/master/roms)
- [Loading test ROMs that require a CP/M implementation/stub](https://discord.com/channels/465585922579103744/466417993912680459/735434453228191794)

## m68k
- [Instruction set reference (just a summary for each instruction, doesn't respond to https://)](http://wpage.unina.it/rcanonic/didattica/ce1/docs/68000.pdf)
- [Programmer's reference manual](https://www.nxp.com/files-static/archives/doc/ref_manual/M68000PRM.pdf)

## PowerPC
- [IBM's PowerPC Architecture Book](https://www.ibm.com/developerworks/systems/library/es-archguide-v2.html)

## ARM
- [ARM instruction set info for the ARM7TDMI-S (not the full document, which apparently can't be found anymore)](https://vision.gel.ulaval.ca/~jflalonde/cours/1001/h17/docs/arm-instructionset.pdf)
- [ARM7TDMI datasheet (contains info about ARM and thumb instruction sets)](https://www.dwedit.org/files/ARM7TDMI.pdf)
- [ARM7TDMI-S Technical Reference Manual (doesn't contain instruction descriptions, but has info on timing)](https://documentation-service.arm.com/static/5e8e13a9fd977155116a3368)
- [ARMv5TE technical reference manual](https://cdn.discordapp.com/attachments/667132407262216272/733255145495986246/ARMv5TE_reference_manual.pdf)
- [ARMv6 technical reference manual](https://cdn.discordapp.com/attachments/466639715001565184/712037447944634378/ARMv6_reference_manual.pdf)
- [ARMv7-AR technical reference manual](https://cdn.discordapp.com/attachments/466639715001565184/715533762703654962/ARMv7-AR_reference_manual.pdf)

## x86
- [8086 family user's manual](https://edge.edx.org/c4x/BITSPilani/EEE231/asset/8086_family_Users_Manual_1_.pdf)
- [Intel® and IA-32 manuals](https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html)
- [8086/80186 test ROM](https://cdn.discordapp.com/attachments/466418871210082325/708247243072733255/test186.zip)
