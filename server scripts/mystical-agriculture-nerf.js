EntityEvents.hurt((event) => {
    if (!event.entity.isPlayer()) return;
    if (event.source.type == 'generic' || event.amount <= 5) return;
    const player = event.entity.asPlayer();
    if (
      player.getChestArmorItem().id.includes('impurium') ||
      player.getChestArmorItem().id.includes('supremium') ||
      player.getChestArmorItem().id.includes('insanium')
    ) {
        player.attack(DamageSource.generic().bypassArmor(), 1);
    }
});
