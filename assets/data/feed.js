const baseURL = 'https://werewolf-assistance.s3.amazonaws.com/';
export default [
    {
        image: baseURL + 'Apprentice-Seer.png',
        role: 'Apprentice Seer',
        weight: 4,
        quickdes: 'If the Seer is eliminated, you become the Seer, waking each night to look for Werewolves.',
        description: 'The Apprentice Seer becomes the Seer if the Seer is eliminated.\nThe Apprentice Seer is woken up when the Seer is called after the Moderator has indicated to the Apprentice Seer that the Seer is eliminated (by a tap on the shoulder during the calling of the Seer at night).\nAlternate: In addition to taking over for the Seer when she dies, the Apprentice Seer targets a player every night, but only learns if they are a Werewolf or not after choosing them twice. This requires additional bookkeeping by the Moderator, but gives the Apprentice Seer a way to contribute without the Seer having to die first.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Aura-Seer.png',
        role: 'Aura Seer',
        weight: 3,
        quickdes: 'Choose a player each night see if that player is not a Werewolf or Villager.',
        description: 'The Aura Seer looks for players with special roles that are not plain Villagers or Werewolves.\nThe more special roles in the game, the more powerful this role becomes. Be sure to have at least one “evil” special role, so the Aura Seer isn’t just functioning as a Villager-finder.\nAlternate: The Aura Seer can be used to learn if the player is on the Villager team. This should only be used if there are a large number of non-Villager roles (at least 3 in addition to the regular Werewolves). The Cursed, Doppelganger and Drunk appear to be on their current team.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Bodyguard.png',
        role: 'Bodyguard',
        weight: 3,
        quickdes: 'Each night, choose a player who cannot be elimminated that night',
        description: 'The Bodyguard chooses a different player each night to protect (but not the same player twice in a row). That player cannot be killed that night. He may not choose himself.\nAlternate: The Bodyguard may not protect the same player twice in the same game.\n2nd Alternate: The Bodyguard’s protected target can’t be killed the next day (by lynching or any other means).',
        team: "Village Team"
    },
    {
        image: baseURL + 'CultLeader.png',
        role: 'Cult Leader',
        weight: +1,
        quickdes: 'Each night, choose a player to join your cult. If all players are in your cult, you win.',
        description: 'The Cult Leader picks a player each night to add to the cult (players picked do not now they are in the cult). The Cult Leader only wins if all players left in the game (not necessarily including himself) are part of the cult. Normal victory conditions for the other teams are still present. The Moderator will need to keep a running list of cult members.\nAlternate: If the Cult Leader is eliminated, the first cult member he picked becomes the new Cult Leader (the Moderator will tap this player on the shoulder when calling for the Cult Leader). The new Cult Leader continues to add members to the cult at night, in addition to any other role they might have. The new Cult Leader joins any previous Cult Leaders on the Cult team, and will only win if the only players left in the game at the end of the game are in the cult.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Cupid.png',
        role: 'Cupid',
        weight: -3,
        quickdes: 'The first night, choose two players to be linked together. If one of them is eliminated, the other is eliminated as well.',
        description: 'Cupid awakes the first night and points at two players (one of which can be himself). Those players become Soulmates and know who the other is (see “Soulmates,” in the Switching Team section below). If one of them dies, the other dies of a broken heart instantly.\nAlternate: Include Cupid as an extra card when dealing out roles. After Cupid selects his targets, he receives the left-over card, and becomes that role for the rest of the game.\n2nd Alternate: The Moderator randomly (or intentionally) chooses the soulmates, so no one knows who the soulmates are except themselves.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Cursed.png',
        role: 'Cursed',
        weight: -3,
        quickdes: 'You are on the Village team unless you are targeted for elimination by the Werewolves, at which time you become a Werewolf.',
        description: 'The Cursed is on the Village team, unless he is targete by the Werewolves, and then they join the werewolf team instead of being eliminated. Each night, the Moderator should wake the Cursed to let them know if they have switched teams (and once they have swithced teams, he should continue to wake them so the players do not know he has been changed).',
        team: "Special Team"
    },
    {
        image: baseURL + 'Diseased.png',
        role: 'Diseased',
        weight: 3,
        quickdes: 'If you are eliminated by Werewolves, they do not get to eliminate anyone the following night',
        description: 'If the Werewolves eat the Diseased player, they skip feeding the following night because they get sick. If the game does not have role reveal, the Werewolves still pick a target the following night, but that target does not die. If the game does have role reveal, the Werewolves do not pick a target.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Doppelganger.png',
        role: 'Doppelganger',
        weight: -2,
        quickdes: 'The first night, choose a player. When that player is eliminated you become that role.',
        description: 'The Doppelganger selects a player the first night. If that player is killed, the Doppelganger secretly takes over that role. Until her target is killed, the Doppelganger is on the Villager Team. The Moderator should clearly indicate to the Doppelganger what her new role is by secretly tapping her on the shoulder at night as soon as she gets her new role. The Doppelganger is shown to the Seer as a Villager until her target dies, then is shown as her new role after that time.\nAlternate: The Doppelganger selects a player the first night and she instantly becomes that role (the original holder of that role is also that role). The Doppelganger must be called every night when using this variant to allow her to do her special action if she has one (if she doesn’t have a special role, she should still be called so that the other players don’t know what role she has). While this can be a lot of fun, it can tilt the game viciously in one direction or another depending on the role obtained by the Doppelganger.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Drunk.png',
        role: 'Drunk',
        weight: 4,
        quickdes: 'You are a Villager until the 3rd night, when you sober up and learn your real role.',
        description: 'The Drunk thinks he is a regular Villager for the first two days, and does not know what he really is until the third night, when the Moderator wakes him and shows him his real role. The Drunk is seen by the Seer as his actual role.\nDuring deck preparation, mix a Werewolf, a Villager, and most or all of the other special roles together and pull one out without showing it to the players. That will be the Drunk’s role.\nAlternate: The Drunk is shown his role on the first night. While he knows what he is, he isn’t allowed to use his special power, if any, so he does not awake when called on the first two nights. For instance, if the Drunk is a Werewolf, he knows he is a Werewolf but may not open his eyes on the first two nights when the Werewolves are called. If he is a Seer, he may not open his eyes on the first two nights when the Seer is called.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Ghost.png',
        role: 'Ghost',
        weight: 2,
        quickdes: 'The first night, you are eliminated. Communicate to the players with single letters each day.',
        description: 'The Ghost dies the first night. Each night (including the first) he may write one letter on a piece of paper for the village, as a message from beyond, with the only limitation being that he may not attempt to identify any player by name or initials. This player may only observe the game from outside the circle, and may not speak to, make eye contact with, or in any other way communicate to the village during the day. This can be a really fun role as the clues given by the Ghost (maybe the first few letters of a color or an object in the room that’s near someone) can be interpreted in many ways, and makes conversation during the first day much more animated than otherwise.\nAlternate: The first player to be killed becomes the Ghost, except that he retains his original team, so for instance if a Werewolf is lynched on the first day, he becomes the Ghost that night. He sees who the Seer and other roles are, and writes his clues to help his team. If the game is not a role reveal game, the players will have to guess what team the Ghost is on.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Hoodlum.png',
        role: 'Hoodlum',
        weight: 0,
        quickdes: 'Choose 2 players on the first night. To win, they must be eliminated and you must still be in the game at the end of the game.',
        description: 'On the first night, the Hoodlum indicates two players. The only way the Hoodlum can win is if both of those players are dead at the end of the game and the Hoodlum is still alive. Normal victory conditions for the other teams are still present, so the Hoodlum needs the Villager team to win in order for him to win as well.\nAlternate: The Hoodlum picks four players, and if the Hoodlum is still alive when those players are dead, the game is over and the Hoodlum wins instantly, and all other teams (except possibly the Cult Leader) lose.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Hunter.png',
        role: 'Hunter',
        weight: 3,
        quickdes: 'If you are eliminated, you may immediately eliminate another player.',
        description: 'If the Hunter is killed (during the day or night), he immediately fires his weapon at a target (or into the air) by pointing at a player to kill them or pointing straight up to not shoot anyone. No discussion should take place before the Hunter chooses a target. If the Hunter is killed at night, he picks his target the next morning, as soon as the moderator tells him he is dead.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Lone-Wolf.png',
        role: 'Lone Wolf',
        weight: -5,
        quickdes: 'Each night, wake with the other Werewolves. You only win if you are the last player in the game.',
        description: 'The Lone Wolf only wins if he is the last player standing (or achieves parity with the village by having only one other non-Werewolf player surviving). The Lone Wolf wakes with the Werewolves to choose a kill each night.\nThis role is best if added at random to the deck; players should not know if certain if this role is included.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Lycan.png',
        role: 'Lycan',
        weight: -1,
        quickdes: 'You are a Village, but appear to the Seer as a Werewolf',
        description: 'The Lycan has a dormant strain of werewolfism, and appears to be a Werewolf to the Seer even though she’s not.\nAlternate: In role reveal games, the Lycan is shown to the players to be a Werewolf when she is killed.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Mason.png',
        role: 'Mason',
        weight: 2,
        quickdes: 'The first night, wake up to see who the other Mason is.',
        description: 'The first night the moderator calls for the Masons to open their eyes and look for the other Mason(s). No one in the village may directly or indirectly speak of the Masons, or the players who speak of them are killed that night by the secret society in order to keep it a secret. If they are killed by the secret society, they automatically lose, even if they are on a winning team.\nThe Moderator needs to use discretion here; it’s much better for gameplay if the subject is never discussed directly or indirectly by the players. If a player says, “well, Bobby knew Joe was safe, but Bobby’s not the Seer,” that’s a clear reference to the Masons, and that player should be killed. Players will only make this mistake once if the Moderator jumps on this right away.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Mayor.png',
        role: 'Mayor',
        weight: 2,
        quickdes: 'Your vote counts twice',
        description: 'The Mayor’s vote counts twice when voting to lynch a player. The moderator should secretly count the Mayor’s vote twice when determining who is lynched.\nThis can be done as a normal role (handed out to a player), or the players can vote (nominate/ vote as in lynching) on a Mayor on the first day, with that Mayor being in place until he dies, at which point another Mayor must be elected.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Minion.png',
        role: 'Minion',
        weight: -6,
        quickdes: 'You know who the Werewolves are, but you do not wake up with them at night',
        description: 'No card is required for the standard use of this role. The first night, the Werewolves pick a player, and that person becomes the Werewolves’ Minion and moves to the Werewolf team. The Player learns who the Werewolves are, but does not wake with them at night. The Seer sees the Minion as a Villager. If the Minion has another special role, that role remains intact (so it is possible to have a Seer Minion, for instance, though that would be very bad for the Villager Team).\nIf playing with both Vampires and Werewolves, each team may have a Minion.\nAlternate: Deal this card as a regular role, and show the Minion who theWerewolves are, and also show the Werewolves who the Minion is. The card prevents the Minion from having a dual role.',
        team: "Werewolf Team"
    },
    {
        image: baseURL + 'Moderator.png',
        role: 'Moderator',
        weight: 0,
        quickdes: 'You are the Moderator.',
        description: 'The Moderator card is used when randomly selecting a Moderator for a game.\nFor experienced groups, add the Moderator card into a deck that already consists of one card for each player besides yourself, deal the cards, and have everyone go to sleep. The player with the Moderator card then starts moderating that first night.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Old-Hag.png',
        role: 'Old Hag',
        weight: 1,
        quickdes: 'Each night, choose a player to leave the village during the next day.',
        description: 'Each night, the Old Hag places a pox on a player; that player must leave the game area for one day, and may not take place in discussions, lynching or any other activities that happen during the day (that player is also safe from the Hunter’s shot or any other method of attack from another player). The Old Hag may not place a pox on herself.\n',
        team: "Village Team"
    },
    {
        image: baseURL + 'Pacifist.png',
        role: 'Pacifist',
        weight: -1,
        quickdes: 'You must always vote for players to not be eliminated',
        description: 'The Pacifist always votes for players to live. The Pacifist is a nice boost for the Werewolf team, as it’s one extra vote to keep players alive during the day, helping to prevent Werewolves from being killed by lynching.\nThis role along with the Idiot should be added at random to the deck. Players should not know beforehand if either or both roles are included.\nAlternate: The Pacifist may not nominate or second the nomination of another player, and must still vote for all players to live.',
        team: "Village Team"
    },
    {
        image: baseURL + 'P-I.png',
        role: 'Paranormal Investigator',
        weight: 3,
        quickdes: 'One night per game, choose a player. You will be told if that player or one of this neighbors is a Werewolf.',
        description: 'One night during the game, the Paranormal Investigator indicates one player, and is told if at least one of the players to the target’s left or right, or the target himself, is a Werewolf. The moderator does not say which of those players is a Werewolf, just that one of them is.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Priest.png',
        role: 'Priest',
        weight: 3,
        quickdes: 'One night per game, choose a player to be protected. The player may not be eliminated at night.',
        description: 'One night during the game, the Priest may choose any player to be protected by holy power. The next attempt to kill that player by any means fails. The Priest may not choose himself. If the Priest dies after “blessing” someone in this way, that player is still protected.\nAlternate: Once per game, the Priest may learn the role of a killed player. This version of the role is only used in games where roles are not revealed, and typically is only found in the “No Reveal” variant.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Prince.png',
        role: 'Prince',
        weight: 3,
        quickdes: 'If you are voted to be eliminated, your role is revealed and you stay.',
        description: 'The first time this player is voted to be lynched, he is revealed as the Prince, and does not get lynched. The Village falls asleep immediately after this failed lynching.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Seer.png',
        role: 'Seer',
        weight: 7,
        quickdes: 'Each night choose a player to learn if he is a Villager or a Werewolf.',
        description: 'Each night, the Seer points at a player, and the moderator shows her the “V” sign for Villager and the “W” sign for Werewolf. To be extra clear that the Seer knows that a targeted player is a werewolf, the moderator may use another indicator (such as bringing up both hands as claws and making a “growling” face).\n',
        team: "Village Team"
    },
    {
        image: baseURL + 'Sorcerer.png',
        role: 'Sorceress',
        weight: -3,
        quickdes: 'Each night, look for the Seer. You are on the werewolf team.',
        description: 'The Sorcerer looks for the Seer each night (the Moderator shows a “thumbs up” if the Sorcerer points to the Seer). The Werewolves do not know who the Sorcerer is, and the Sorcerer does not know who the Werewolves are. The Seer sees the Sorcerer as a Villager.\nAlternate: The Sorcerer is shown who the Werewolves are on the first night. This is a significant advantage for the Werewolf team.',
        team: "Werewolf Team"
    },
    {
        image: baseURL + 'Spellcaster.png',
        role: 'Spellcaster',
        weight: 1,
        quickdes: 'Each night, choose a player who may not speak the following day.',
        description: 'Each night, the Spellcaster may choose one player to be muted for the following day (they may not speak, but may still vote and use charade-like motions). The Spellcaster may choose to mute themselves, but may not mute the same player twice during a single game.\nAlternate: Each night, the Spellcaster must choose one player to be muted for the following day. This changes the role from a fun one in the first few rounds to an agonizing decision for the Spellcaster in later rounds.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Tanner.png',
        role: 'Tanner',
        weight: -2,
        quickdes: 'You hate your job and your life. You win if you are eliminated.',
        description: 'The Tanner only wins if he is eliminated. Victory conditions for the other teams are still present; the game continues after the Tanner wins.\nAlternate: Only the Tanner wins if he is eliminated; all the other teams lose if the Tanner wins. This causes a greate deal of angst and stress among the players, and gives the Werewolves another angle to argue (until the Seer checks them, of course).',
        team: "Special Team"
    },
    {
        image: baseURL + 'Tough-Guy,png',
        role: 'Tough Guy',
        weight: 3,
        quickdes: 'If the Werewolves attempt to eliminate you, you are not eliminated until the following night',
        description: 'If targeted by the Werewolves, dies the following night (instead of the same night he was attacked). The players are told that no one has died the previous night. The following night there may be two or more player deaths: the Tough Guy as well as any other characters targeted or killed that night.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Troublemaker.png',
        role: 'Troublemaker',
        weight: -3,
        quickdes: 'One night per game, stir up trouble by calling for players to be eliminated the following day.',
        description: 'Once during the game, the Troublemaker indicates to the Moderator at night that there will be two lynchings the following day. Each night, the Moderator should say, “Does the Troublemaker want to stir up trouble?” If the Troublemaker does, the Moderator should announce this to the village after the first successful lynch the next day.',
        team: "Village Team"
    },
    {   
        image: baseURL + 'Vampire.png',
        role: 'Vampire',
        weight: -7,
        quickdes: 'Each night, choose a player. That player is eliminated when a player gets their 2nd accusation the next day.',
        description: 'The Vampires are a third major team in addition to the Werewolf team and the Villager team. Vampires choose a victim each night (in addition to the Werewolves’ victim), but that victim is not revealed until a nomination occurs; the Vampiret arget dies right then in the middle of the day. Vampires can’t be killed by Werewolves, making them slightly more powerful than their furry counterparts.\nWith three major teams, the Vampires or Werewolves need to totally wipe out the other two teams before declaring a victory. Vampires may be used in experienced large groups, substituting Vampires for Werewolves (the total number of Werewolves + Vampires should be the same as the number of Werewolves in a regular game). All special roles that target Werewolves (Seer, P.I., etc.) also target Vampires, but do not distinguish between the two teams.',
        team: "Special Team"
    },
    {
        image: baseURL + 'Villager.png',
        role: 'Villager',
        weight: 1,
        quickdes: 'Find the Werewolves and eliminate them.',
        description: "Villagers' sole purpose is to find the Werewolves and eliminate them.",
        team: "Village Team"
    },
    {
        image: baseURL + 'Villager-Idiot.png',
        role: 'Village Idiot',
        weight: 2,
        quickdes: 'You always vote for players to be eliminated',
        description: 'The Village Idiot always votes for players to die. This role along with the Pacifist should be added at random to the deck. Players should not know beforehand if either or both roles are included.\nAlternate: Do not deal this card, but instead randomly determine who the Village Idiot is. The Idiot does not know he is an Village Idiot, and his vote is always recorded as a vote to die',
        team: "Village Team"
    },
    {
        image: baseURL + 'Werewolf.png',
        role: 'Werewolf',
        weight: -6,
        quickdes: 'Each night, wake with the other Werewolves and choose a player to eliminate.',
        description: 'The Werewolves learn the identity of the other Werewolves the first night. Each night after the first night, the Werewolves must agree on a target to kill. If the Werewolves spend more than a minute or so determining a target for the night, they do not get to choose a target that night. The Werewolves may not target another Werewolf at night.\nWerewolves try to keep their identity a secret during the day.',
        team: "Werewolf Team"
    },
    {
        image: baseURL + 'Witch.png',
        role: 'Witch',
        weight: 4,
        quickdes: 'You may save or eliminate a player at night once each per game.',
        description: 'The Witch may use her power of healing once during the game to save someone attacked at night. She may also use her power of killing once during the game to kill the player of her choice. The Moderator should call the Witch every night and ask if she would like to use each of her special powers, even if they have been used. Both powers may be used on the same night.\nAlternate: The Witch may only use one of her two powers during the game, but may choose which one to use.',
        team: "Village Team"
    },
    {
        image: baseURL + 'Wolf-Club.png',
        role: 'Wolf Cub',
        weight: -8,
        quickdes: 'Each night, wake with the Werewolves. If you are eliminated, the Werewolves eliminate two players the following night.',
        description: 'The Wolf Cub is a Werewolf, and wakes with them each night. If the Wolf Cub is killed, the Werewolves get two kills the next night. The Werewolves may target the Wolf Cub at night (all Werewolves and the Wolf Cub must agree on the Wolf Cub as a target). In return for this sacrifice, the Werewolves may select two additional players to be killed that night immediately following the selection of the Wolf Cub.\n',
        team: "Werewolf Team"
    },
]