

BlockEvents.broken(event => { //Crop XP
  if (event.block.hasTag('c:crops')) {
    if (event.player.isPlayer()) {
      event.block.popExperience(Math.floor(Math.random() * 4) + 1);
    }
  }
});


PlayerEvents.respawned(event => { //XP Loss on death
    let xp = event.player.xpLevels;
    if(xp >= 5) {
      event.player.setExperienceLevels(Math.max(Math.floor(xp/2, 5)));
    }  
})


