const skills = {
  // Agility
  catch: "Catch",
  divingCatch: "Diving Catch",
  divingTackle: "Diving Tackle",
  dodge: "Dodge",
  defensive: "Defensive",
  jumpUp: "Jump Up",
  leap: "Leap",
  safePairOfHands: "Safe Pair of Hands",
  sideStep: "Side Step",
  sneakyGit: "Sneaky Git",
  sprint: "Sprint",
  sureFeet: "Sure Feet",
  // General
  block: "Block",
  dauntless: "Dauntless",
  dirtyPlayer: (x) => "Dirty Player (+" + x + ")",
  fend: "Fend",
  frenzy: "Frenzy",
  kick: "Kick",
  pro: "Pro",
  shadowing: "Shadowing",
  stripBall: "Strip Ball",
  sureHands: "Sure Hands",
  tackle: "Tackle",
  wrestle: "Wrestle",
  // Mutation
  bigHand: "Big Hand",
  claws: "Claws",
  disturbingPresence: "Disturbing Presence",
  extraArms: "Extra Arms",
  foulAppearance: "Foul Appearance",
  horns: "Horns",
  ironHardSkin: "Iron Hard Skin",
  monstrousMouth: "Monstrous Mouth",
  prehensileTail: "Prehensile Tail",
  tentacles: "Tentacles",
  twoHeads: "Two Heads",
  veryLongLegs: "Very Long Legs",
  // Passing
  accurate: "Accurate",
  cannoneer: "Cannoneer",
  cloudBurster: "Cloud Burster",
  dumpOff: "Dump-off",
  fumblerooskie: "Fumblerooskie",
  hailMaryPass: "Hail Mary Pass",
  leader: "Leader",
  nervesOfSteel: "Nerves of Steel",
  onTheBall: "On the Ball",
  pass: "Pass",
  runningPass: "Running Pass",
  safePass: "Safe Pass",
  // Strength
  armBar: "Arm Bar",
  brawler: "Brawler",
  breakTackle: "Break Tackle",
  grab: "Grab",
  guard: "Guard",
  juggernaut: "Juggernaut",
  mightyBlow: (x) => "Mighty Blow (+" + x + ")",
  multipleBlock: "Multiple Block",
  pileDriver: "Pile Driver",
  standFirm: "Stand Firm",
  strongArm: "Strong Arm",
  thickSkull: "Thick Skull",
  // Traits
  animalSavagery: "Animal Savagery",
  animosity: (x) => "Animosity (" + x + ")",
  alwaysHungry: "Always Hungry",
  ballAndChain: "Ball & Chain",
  bombardier: "Bombardier",
  boneHead: "Bone Head",
  chainsaw: "Chainsaw",
  decay: "Decay",
  hypnoticGaze: "Hypnotic Gaze",
  kickTeamMate: "Kick Team Mate",
  loner: (x) => "Loner (" + x + "+)",
  noHands: "No Hands",
  plagueRidden: "Plague Ridden",
  pogoStick: "Pogo Stick",
  projectileVomit: "Projectile Vomit",
  reallyStupid: "Really Stupid",
  regeneration: "Regeneration",
  rightStuff: "Right Stuff",
  secretWeapon: "Secret Weapon",
  stab: "Stab",
  stunty: "Stunty",
  swarming: "Swarming",
  swoop: "Swoop",
  takeRoot: "Take Root",
  titchy: "Titchy",
  timmmber: "Timmm-ber!",
  throwTeamMate: "Throw Team-mate",
  unchannelledFury: "Unchannelled Fury"
};


const positional = (quantity, position, cost, ma, st, ag, pa, av, skills, primaryAccess, secondaryAccess) => {
  return {
    quantity: quantity,
    position: position,
    cost: cost,
    ma: ma,
    st: st,
    ag: ag,
    pa: pa,
    av: av,
    skills: skills,
    primaryAccess: primaryAccess,
    secondaryAccess: secondaryAccess,
  };
};


const roster = (name, positionals, costOfReRolls, apothecaryAllowed, tier) => {
  return {
    name: name,
    positionals: positionals,
    costOfReRolls: costOfReRolls,
    apothecaryAllowed: apothecaryAllowed,
    tier: tier,
  };
};


const rosters = [
  roster(
    "Amazon",
    [
      positional(16, "Linewoman", 50000, 6, 3, 3, 4, 8, [skills.dodge], "G", "AS"),
      positional(2, "Thrower", 75000, 6, 3, 3, 3, 8, [skills.dodge, skills.pass], "GP", "AS"),
      positional(2, "Catcher", 75000, 6, 3, 3, 5, 8, [skills.catch, skills.dodge], "AG", "S"),
      positional(4, "Blitzer", 90000, 6, 3, 3, 5, 8, [skills.block, skills.dodge], "GS", "A")
    ],
    50000,
    true,
    1,
  ),
  roster(
    "Black Orc",
    [
      positional(12, "Goblin Bruiser", 45000, 6, 2, 3, 4, 8, [skills.dodge, skills.rightStuff, skills.stunty, skills.thickSkull], "A", "GPS"),
      positional(6, "Black Orc", 90000, 4, 4, 4, 5, 10, [skills.brawler, skills.grab], "GS", "AP"),
      positional(1, "Trained Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(3), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "S", "AGP")
    ],
    60000,
    true,
    2,
  ),
  roster(
    "Chaos Chosen",
    [
      positional(16, "Beastman Runner", 60000, 6, 3, 3, 4, 9, [skills.horns], "GMS", "AP"),
      positional(4, "Chosen Blocker", 100000, 5, 4, 3, 5, 10, [], "GMS", "A"),
      positional(1, "Chaos Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(4), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "MS", "AG"),
      positional(1, "Chaos Ogre", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "MS", "AG"),
      positional(1, "Minotaur", 150000, 5, 5, 4, null, 9, [skills.loner(4), skills.frenzy, skills.horns, skills.mightyBlow(1), skills.thickSkull, skills.unchannelledFury], "MS", "AG")
    ],
    60000,
    true,
    2,
  ),
  roster(
    "Chaos Dwarf",
    [
      positional(16, "Hobgoblin", 40000, 6, 3, 3, 4, 8, [], "G", "AS"),
      positional(6, "Blocker", 70000, 4, 3, 4, 6, 10, [skills.block, skills.tackle, skills.thickSkull], "GS", "AM"),
      positional(2, "Bull Centaur", 130000, 6, 4, 4, 6, 10, [skills.sprint, skills.sureFeet, skills.thickSkull], "GS", "A"),
      positional(1, "Enslaved Minotaur", 150000, 5, 5, 4, null, 9, [skills.animalSavagery, skills.frenzy, skills.horns, skills.loner(4), skills.mightyBlow(1), skills.thickSkull], "S", "AGM")
    ],
    70000,
    true,
    1,
  ),
  roster(
    "Chaos Renegade",
    [
      positional(12, "Human Lineman", 50000, 6, 3, 3, 4, 9, [], "GM", "AS"),
      positional(1, "Human Thrower", 75000, 6, 3, 3, 3, 9, [skills.animosity("all team-mates"), skills.pass, skills.safePairOfHands], "GMP", "AS"),
      positional(1, "Goblin", 40000, 6, 2, 3, 4, 8, [skills.animosity("all team-mates"), skills.dodge, skills.rightStuff, skills.stunty], "AM", "GP"),
      positional(1, "Orc", 50000, 5, 3, 3, 5, 10, [skills.animosity("all team-mates")], "GM", "AS"),
      positional(1, "Skaven", 50000, 7, 3, 3, 4, 8, [skills.animosity("all team-mates")], "GM", "AS"),
      positional(1, "Dark Elf", 75000, 6, 3, 2, 3, 9, [skills.animosity("all team-mates")], "AGM", "PS"),
      positional(1, "Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(4), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "S", "AGM"),
      positional(1, "Ogre", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "S", "AGM"),
      positional(1, "Minotaur", 150000, 5, 5, 4, null, 9, [skills.loner(4), skills.frenzy, skills.horns, skills.mightyBlow(1), skills.thickSkull, skills.unchannelledFury], "S", "AGM"),
      positional(1, "Rat Ogre", 150000, 6, 5, 4, null, 9, [skills.animalSavagery, skills.frenzy, skills.loner(4), skills.mightyBlow(1), skills.prehensileTail], "S", "AGM")
    ],
    70000,
    true,
    2,
  ),
  roster(
    "Dark Elf",
    [
      positional(12, "Lineman", 70000, 6, 3, 2, 4, 9, [], "AG", "S"),
      positional(2, "Runner", 80000, 7, 3, 2, 3, 8, [skills.dumpOff], "AGP", "S"),
      positional(4, "Blitzer", 100000, 7, 3, 2, 4, 9, [skills.block], "AG", "PS"),
      positional(2, "Assassin", 85000, 7, 3, 2, 5, 8, [skills.shadowing, skills.stab], "AG", "PS"),
      positional(2, "Witch Elf", 110000, 7, 3, 2, 5, 8, [skills.dodge, skills.frenzy, skills.jumpUp], "AG", "PS")
    ],
    50000,
    true,
    1,
  ),
  roster(
    "Dwarf",
    [
      positional(12, "Blocker", 70000, 4, 3, 4, 5, 10, [skills.block, skills.tackle, skills.thickSkull], "GS", "A"),
      positional(2, "Runner", 85000, 6, 3, 3, 4, 9, [skills.sureHands, skills.thickSkull], "GP", "AS"),
      positional(2, "Blitzer", 80000, 5, 3, 3, 4, 10, [skills.block, skills.thickSkull], "GS", "AP"),
      positional(2, "Troll Slayer", 95000, 5, 3, 4, null, 9, [skills.block, skills.dauntless, skills.frenzy, skills.thickSkull], "GS", "A"),
      positional(1, "Deathroller", 170000, 4, 7, 5, null, 11, [skills.breakTackle, skills.dirtyPlayer(2), skills.juggernaut, skills.loner(5), skills.mightyBlow(1), skills.noHands, skills.secretWeapon, skills.standFirm], "S", "AG")
    ],
    50000,
    true,
    1,
  ),
  roster(
    "Elven Union",
    [
      positional(12, "Lineman", 60000, 6, 3, 2, 4, 8, [], "AG", "S"),
      positional(2, "Thrower", 75000, 6, 3, 2, 2, 8, [skills.pass], "AGP", "S"),
      positional(4, "Catcher", 100000, 8, 3, 2, 4, 8, [skills.catch, skills.nervesOfSteel], "AG", "S"),
      positional(2, "Blitzer", 115000, 7, 3, 2, 3, 9, [skills.block, skills.sideStep], "AG", "PS")
    ],
    50000,
    true,
    2,
  ),
  roster(
    "Goblin",
    [
      positional(16, "Lineman", 40000, 6, 2, 3, 4, 8, [skills.dodge, skills.rightStuff, skills.stunty], "A", "GPS"),
      positional(1, "Bomma", 45000, 6, 2, 3, 4, 8, [skills.bombardier, skills.dodge, skills.secretWeapon, skills.stunty], "A", "GPS"),
      positional(1, "Looney", 40000, 6, 2, 3, null, 8, [skills.chainsaw, skills.secretWeapon, skills.stunty], "A", "GS"),
      positional(1, "Fanatic", 70000, 3, 7, 3, null, 8, [skills.ballAndChain, skills.noHands, skills.secretWeapon, skills.stunty], "S", "AG"),
      positional(1, "Pogoer", 75000, 7, 2, 3, 5, 8, [skills.dodge, skills.pogoStick, skills.stunty], "A", "GPS"),
      positional(1, "Ooligan", 65000, 6, 2, 3, 6, 8, [skills.dirtyPlayer(1), skills.disturbingPresence, skills.dodge, skills.rightStuff, skills.stunty], "A", "GPS"),
      positional(1, "Doom Diver", 60000, 6, 2, 3, 6, 8, [skills.rightStuff, skills.stunty, skills.swoop], "A", "GS"),
      positional(2, "Trained Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(3), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "S", "AGP")
    ],
    60000,
    true,
    3,
  ),
  roster(
    "Halfling",
    [
      positional(16, "Hopeful", 30000, 5, 2, 3, 4, 7, [skills.dodge, skills.rightStuff, skills.stunty], "A", "GS"),
      positional(2, "Hefty", 50000, 5, 2, 3, 3, 8, [skills.dodge, skills.fend, skills.stunty], "AP", "GS"),
      positional(2, "Catcher", 55000, 5, 2, 3, 5, 7, [skills.catch, skills.dodge, skills.rightStuff, skills.sprint, skills.stunty], "A", "GS"),
      positional(2, "Altern Forest Treeman", 120000, 2, 6, 5, 5, 11, [skills.mightyBlow(1), skills.standFirm, skills.strongArm, skills.takeRoot, skills.thickSkull, skills.throwTeamMate, skills.timmmber], "S", "AGP")
    ],
    60000,
    true,
    3,
  ),
  roster(
    "High Elf",
    [
      positional(16, "Lineman", 70000, 6, 3, 2, 4, 9, [], "AG", "PS"),
      positional(2, "Thrower", 100000, 6, 3, 2, 2, 9, [skills.cloudBurster, skills.pass, skills.safePass], "AGP", "S"),
      positional(4, "Catcher", 90000, 8, 3, 2, 5, 8, [skills.catch], "AG", "S"),
      positional(2, "Blitzer", 100000, 7, 3, 2, 4, 9, [skills.block], "AG", "PS")
    ],
    50000,
    true,
    2,
  ),
  roster(
    "Human",
    [
      positional(16, "Lineman", 50000, 6, 3, 3, 4, 9, [], "G", "AS"),
      positional(2, "Thrower", 80000, 6, 3, 3, 2, 9, [skills.pass, skills.sureHands], "GP", "AS"),
      positional(4, "Catcher", 65000, 8, 2, 3, 5, 8, [skills.catch, skills.dodge], "AG", "SP"),
      positional(4, "Blitzer", 85000, 7, 3, 3, 4, 9, [skills.block], "GS", "AP"),
      positional(3, "Halfling Hopeful", 30000, 5, 2, 3, 4, 7, [skills.dodge, skills.rightStuff, skills.stunty], "A", "GS"),
      positional(1, "Ogre", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "S", "AG")
    ],
    50000,
    true,
    1,
  ),
  roster(
    "Imperial Nobility",
    [
      positional(12, "Retainer Lineman", 45000, 6, 3, 4, 4, 8, [skills.fend], "G", "AS"),
      positional(2, "Thrower", 75000, 6, 3, 3, 3, 9, [skills.pass, skills.runningPass], "GP", "AS"),
      positional(2, "Noble Blitzer", 105000, 7, 3, 3, 4, 9, [skills.block, skills.catch], "AG", "PS"),
      positional(4, "Bodyguard", 90000, 6, 3, 3, 5, 9, [skills.standFirm, skills.wrestle], "GS", "A"),
      positional(1, "Ogre", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "S", "AG")
    ],
    70000,
    true,
    2,
  ),
  roster(
    "Khorne",
    [
      positional(16, "Pit Fighter", 60000, 6, 3, 3, 4, 9, [skills.frenzy], "G", "AS"),
      positional(4, "Bloodletter", 80000, 6, 3, 3, 4, 8, [skills.horns, skills.juggernaut, skills.regeneration], "AGS", "P"),
      positional(2, "Herald", 90000, 6, 3, 3, 5, 9, [skills.frenzy, skills.horns, skills.juggernaut], "GS", "AP"),
      positional(1, "Bloodthirster", 180000, 6, 5, 5, null, 10, [skills.claws, skills.frenzy, skills.horns, skills.juggernaut, skills.loner(4), skills.regeneration, skills.unchannelledFury], "S", "AG"),
    ],
    70000,
    true,
    2,
  ),
  roster(
    "Lizardmen",
    [
      positional(12, "Skink Runner", 60000, 8, 2, 3, 4, 8, [skills.dodge, skills.stunty], "A", "GPS"),
      positional(2, "Chameleon Skink", 70000, 7, 2, 3, 3, 8, [skills.dodge, skills.onTheBall, skills.shadowing, skills.stunty], "A", "GPS"),
      positional(6, "Saurus Blocker", 85000, 6, 4, 5, 6, 10, [], "GS", "A"),
      positional(1, "Kroxigor", 140000, 6, 5, 5, null, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.prehensileTail, skills.thickSkull], "S", "AG")
    ],
    70000,
    true,
    1,
  ),
  roster(
    "Necromantic Horror",
    [
      positional(16, "Zombie", 40000, 4, 3, 4, null, 9, [skills.regeneration], "G", "AS"),
      positional(2, "Ghoul Runner", 75000, 7, 3, 3, 4, 8, [skills.dodge], "AG", "PS"),
      positional(2, "Wraith", 95000, 6, 3, 3, null, 9, [skills.block, skills.foulAppearance, skills.noHands, skills.regeneration, skills.sideStep], "GS", "A"),
      positional(2, "Werewolf", 125000, 8, 3, 3, 4, 9, [skills.claws, skills.frenzy, skills.regeneration], "AG", "PS"),
      positional(2, "Flesh Golem", 115000, 4, 4, 4, null, 10, [skills.regeneration, skills.standFirm, skills.thickSkull], "GS", "A")
    ],
    70000,
    false,
    2,
  ),
  roster(
    "Norse",
    [
      positional(12, "Lineman", 50000, 6, 3, 3, 4, 8, [skills.block], "G", "AS"),
      positional(2, "Thrower", 70000, 6, 3, 3, 3, 8, [skills.block, skills.pass], "GP", "AS"),
      positional(2, "Catcher", 90000, 7, 3, 3, 5, 8, [skills.block, skills.dauntless], "AG", "S"),
      positional(2, "Berserker", 90000, 6, 3, 3, 5, 8, [skills.block, skills.frenzy, skills.jumpUp], "GS", "A"),
      positional(2, "Ulfwerener", 105000, 6, 4, 4, null, 9, [skills.frenzy], "GS", "A"),
      positional(1, "Yhetee", 140000, 5, 5, 5, null, 9, [skills.claws, skills.disturbingPresence, skills.frenzy, skills.loner(4), skills.unchannelledFury], "S", "AG")
    ],
    60000,
    true,
    1,
  ),
  roster(
    "Nurgle",
    [
      positional(12, "Rotter", 35000, 5, 3, 4, 6, 9, [skills.decay, skills.plagueRidden], "GM", "AS"),
      positional(4, "Pestigor", 75000, 6, 3, 3, 4, 9, [skills.horns, skills.plagueRidden, skills.regeneration], "GMS", "AP"),
      positional(4, "Bloater", 115000, 4, 4, 4, 6, 10, [skills.disturbingPresence, skills.foulAppearance, skills.plagueRidden, skills.regeneration], "GMS", "A"),
      positional(1, "Rotspawn", 140000, 4, 5, 5, null, 10, [skills.disturbingPresence, skills.foulAppearance, skills.loner(4), skills.mightyBlow(1), skills.plagueRidden, skills.reallyStupid, skills.regeneration, skills.tentacles], "S", "AGM")
    ],
    70000,
    false,
    2,
  ),
  roster(
    "Ogre",
    [
      positional(16, "Gnoblar", 15000, 5, 1, 3, 5, 6, [skills.dodge, skills.rightStuff, skills.sideStep, skills.stunty, skills.titchy], "A", "G"),
      positional(1, "Ogre Runt Punter", 145000, 5, 5, 4, 4, 10, [skills.boneHead, skills.kickTeamMate, skills.mightyBlow(1), skills.thickSkull], "PS", "AG"),
      positional(5, "Ogre Blocker", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "S", "AGP")
    ],
    70000,
    true,
    3,
  ),
  roster(
    "Old World Alliance",
    [
      positional(12, "Human Lineman", 50000, 6, 3, 3, 4, 9, [], "G", "AS"),
      positional(1, "Human Thrower", 80000, 6, 3, 3, 3, 9, [skills.animosity("all Dwarf and Hafling team-mates"), skills.pass, skills.sureHands], "GP", "AS"),
      positional(1, "Human Catcher", 65000, 8, 2, 3, 5, 8, [skills.animosity("all Dwarf and Hafling team-mates"), skills.catch, skills.dodge], "AG", "S"),
      positional(1, "Human Blitzer", 90000, 7, 3, 3, 4, 9, [skills.animosity("all Dwarf and Hafling team-mates"), skills.block], "GS", "A"),
      positional(2, "Dwarf Blocker", 75000, 4, 3, 4, 5, 10, [skills.armBar, skills.brawler, skills.loner(3), skills.thickSkull], "GS", "A"),
      positional(1, "Dwarf Runner", 85000, 6, 3, 3, 4, 9, [skills.loner(3), skills.sureHands, skills.thickSkull], "GP", "AS"),
      positional(1, "Dwarf Blitzer", 80000, 5, 3, 3, 4, 10, [skills.block, skills.loner(3), skills.thickSkull], "GS", "A"),
      positional(1, "Dwarf Troll Slayer", 95000, 5, 3, 4, null, 9, [skills.block, skills.dauntless, skills.frenzy, skills.loner(3), skills.thickSkull], "GS", "A"),
      positional(2, "Halfling Hopeful", 30000, 5, 2, 3, 4, 7, [skills.animosity("all Dwarf and Human team-mates"), skills.dodge, skills.rightStuff, skills.stunty], "A", "GS"),
      positional(1, "Ogre", 140000, 5, 5, 4, 5, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.thickSkull, skills.throwTeamMate], "S", "AG"),
      positional(1, "Altern Forest Treeman", 120000, 2, 6, 5, 5, 11, [skills.loner(4), skills.mightyBlow(1), skills.standFirm, skills.strongArm, skills.takeRoot, skills.thickSkull, skills.throwTeamMate, skills.timmmber], "S", "AGP")
    ],
    70000,
    true,
    1,
  ),
  roster(
    "Orc",
    [
      positional(16, "Lineman", 50000, 5, 3, 3, 4, 10, [skills.animosity("Orc Linemen")], "G", "AS"),
      positional(2, "Thrower", 65000, 5, 3, 3, 3, 9, [skills.animosity("all team-mates"), skills.pass, skills.sureHands], "GP", "AS"),
      positional(4, "Blitzer", 80000, 6, 3, 3, 4, 10, [skills.animosity("all team-mates"), skills.block], "GS", "AP"),
      positional(4, "Big Un Blocker", 90000, 5, 4, 4, null, 10, [skills.animosity("Big Un Blockers")], "GS", "A"),
      positional(4, "Goblin", 40000, 6, 2, 3, 4, 8, [skills.dodge, skills.rightStuff, skills.stunty], "A", "GS"),
      positional(1, "Untrained Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(4), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "S", "AGP")
    ],
    60000,
    true,
    1,
  ),
  roster(
    "Shambling Undead",
    [
      positional(12, "Skeleton", 40000, 5, 3, 4, 6, 8, [skills.regeneration, skills.thickSkull], "G", "AS"),
      positional(12, "Zombie", 40000, 4, 3, 4, null, 9, [skills.regeneration], "G", "AS"),
      positional(4, "Ghoul Runner", 75000, 7, 3, 3, 4, 8, [skills.dodge], "AG", "PS"),
      positional(2, "Wight Blitzer", 90000, 6, 3, 3, 5, 9, [skills.block, skills.regeneration], "GS", "AP"),
      positional(2, "Mummy", 125000, 3, 5, 5, null, 10, [skills.mightyBlow(1), skills.regeneration], "S", "AG")
    ],
    70000,
    false,
    1,
  ),
  roster(
    "Skaven",
    [
      positional(16, "Clanrat Lineman", 50000, 7, 3, 3, 4, 8, [], "G", "AMS"),
      positional(2, "Thrower", 85000, 7, 3, 3, 2, 8, [skills.pass, skills.sureHands], "GP", "AMS"),
      positional(4, "Gutter Runner", 85000, 9, 2, 2, 4, 8, [skills.dodge], "AG", "MPS"),
      positional(2, "Blitzer", 90000, 7, 3, 3, 5, 9, [skills.block], "GS", "AMP"),
      positional(1, "Rat Ogre", 150000, 6, 5, 4, null, 9, [skills.animalSavagery, skills.frenzy, skills.loner(4), skills.mightyBlow(1), skills.prehensileTail], "S", "AGM")
    ],
    50000,
    true,
    1,
  ),
  roster(
    "Slann",
    [
      positional(16, "Lineman", 60000, 6, 3, 3, 4, 9, [skills.pogoStick, skills.veryLongLegs], "G", "AS"),
      positional(4, "Catcher", 80000, 7, 2, 2, 4, 8, [skills.divingCatch, skills.pogoStick, skills.veryLongLegs], "AG", "PS"),
      positional(4, "Blitzer", 110000, 7, 3, 3, 4, 9, [skills.divingTackle, skills.jumpUp, skills.pogoStick, skills.veryLongLegs], "AGS", "P"),
      positional(1, "Kroxigor", 140000, 6, 5, 5, null, 10, [skills.boneHead, skills.loner(4), skills.mightyBlow(1), skills.prehensileTail, skills.thickSkull], "S", "AG")
    ],
    50000,
    true,
    2,
  ),
  roster(
    "Snotling",
    [
      positional(16, "Snotling Lineman", 15000, 5, 1, 3, 5, 6, [skills.dodge, skills.rightStuff, skills.sideStep, skills.stunty, skills.swarming, skills.titchy], "A", "G"),
      positional(2, "Fungus Flinga", 30000, 5, 1, 3, 4, 6, [skills.bombardier, skills.dodge, skills.rightStuff, skills.secretWeapon, skills.sideStep, skills.stunty], "AP", "G"),
      positional(2, "Fun-hoppa", 20000, 6, 1, 3, 5, 6, [skills.dodge, skills.pogoStick, skills.rightStuff, skills.sideStep, skills.stunty], "A", "G"),
      positional(2, "Stilty Runna", 20000, 6, 1, 3, 5, 6, [skills.dodge, skills.rightStuff, skills.sideStep, skills.sprint, skills.stunty], "A", "G"),
      positional(2, "Pump Wagon", 105000, 4, 5, 5, null, 9, [skills.dirtyPlayer(1), skills.juggernaut, skills.mightyBlow(1), skills.reallyStupid, skills.secretWeapon, skills.standFirm], "S", "AG"),
      positional(2, "Trained Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(3), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "S", "AGP")
    ],
    60000,
    true,
    3,
  ),
  roster(
    "Tomb Kings",
    [
      positional(16, "Skeleton", 40000, 5, 3, 4, 6, 8, [skills.regeneration, skills.thickSkull], "G", "AS"),
      positional(2, "Anointed Thrower", 70000, 6, 3, 4, 3, 8, [skills.pass, skills.regeneration, skills.sureHands, skills.thickSkull], "GP", "A"),
      positional(2, "Anointed Blitzer", 90000, 6, 3, 4, 6, 9, [skills.block, skills.regeneration, skills.thickSkull], "GS", "AP"),
      positional(4, "Tomb Guardian", 100000, 4, 5, 5, null, 10, [skills.decay, skills.regeneration], "S", "AG")
    ],
    70000,
    false,
    2,
  ),
  roster(
    "Underworld Denizens",
    [
      positional(12, "Underworld Goblin", 40000, 6, 2, 3, 4, 8, [skills.dodge, skills.rightStuff, skills.stunty], "AM", "GS"),
      positional(6, "Underworld Snotling", 15000, 5, 1, 3, 5, 6, [skills.dodge, skills.rightStuff, skills.sideStep, skills.stunty, skills.swarming, skills.titchy], "AM", "G"),
      positional(3, "Skaven Clanrat", 50000, 7, 3, 3, 4, 8, [skills.animosity("Underworld Goblin Linemen")], "GM", "AS"),
      positional(1, "Skaven Thrower", 85000, 7, 3, 3, 2, 8, [skills.animosity("Underworld Goblin Linemen"), skills.pass, skills.sureHands], "GMP", "AS"),
      positional(1, "Gutter Runner", 85000, 9, 2, 2, 4, 8, [skills.animosity("Underworld Goblin Linemen"), skills.dodge], "AGM", "PS"),
      positional(1, "Skaven Blitzer", 90000, 7, 3, 3, 5, 9, [skills.animosity("Underworld Goblin Linemen"), skills.block], "GMS", "AP"),
      positional(1, "Underworld Troll", 115000, 4, 5, 5, 5, 10, [skills.alwaysHungry, skills.loner(4), skills.mightyBlow(1), skills.projectileVomit, skills.reallyStupid, skills.regeneration, skills.throwTeamMate], "MS", "AGP"),
      positional(1, "Mutant Rat Ogre", 150000, 6, 5, 4, null, 9, [skills.animalSavagery, skills.frenzy, skills.loner(4), skills.mightyBlow(1), skills.prehensileTail], "MS", "AG")
    ],
    70000,
    true,
    2,
  ),
  roster(
    "Vampire",
    [
      positional(12, "Thrall", 40000, 6, 3, 3, 5, 8, [], "G", "AS"),
      positional(6, "Vampire", 110000, 6, 4, 2, 3, 9, [skills.animalSavagery, skills.hypnoticGaze, skills.regeneration], "AGS", "P")
    ],
    70000,
    true,
    2,
  ),
  roster(
    "Wood Elf",
    [
      positional(12, "Lineman", 70000, 7, 3, 2, 4, 8, [], "AG", "S"),
      positional(2, "Thrower", 95000, 7, 3, 2, 2, 8, [skills.pass], "AGP", "S"),
      positional(4, "Catcher", 90000, 8, 2, 2, 4, 8, [skills.catch, skills.dodge], "AG", "PS"),
      positional(2, "Wardancer", 125000, 8, 3, 2, 4, 8, [skills.block, skills.dodge, skills.leap], "AG", "PS"),
      positional(1, "Loren Forest Treeman", 120000, 2, 6, 5, 5, 11, [skills.loner(4), skills.mightyBlow(1), skills.standFirm, skills.strongArm, skills.takeRoot, skills.thickSkull, skills.throwTeamMate], "S", "AG")
    ],
    50000,
    true,
    1,
  ),
];

export {rosters, skills};
