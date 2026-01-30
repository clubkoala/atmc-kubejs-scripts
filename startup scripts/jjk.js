StartupEvents.registry('irons_spellbooks:spells', event => {
  event.create('Dismantle')
    .setCastTime(0)
    .setCooldownSeconds(5)
    .setManaCostPerLevel(100)
    .setCastType('instant')
    .setSchool('irons_spellbooks:blood')
    .setMinRarity('legendary')
    .setMaxLevel(1)
    .setFinishSound('item.honey_bottle.drink')
    .onCast(ctx => global.dismantle(ctx))
    .setAllowLooting(true)
    .needsLearning(false)
    .canBeCraftedBy(player => true)
    .setUniqueInfo((spellLevel, caster) => {
      return [
        Component.green(`Damage: 20`)
      ]
    })
    .checkPreCastConditions(ctx => {
      return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 10, 0.35)
    })
})

global.dismantle = (ctx) => {
  const target = ISSUtils.getSpellTargetEntity(ctx.level, ctx.entity, 10, 0.35)
  if (target != null) {
    if (target instanceof EntityLivingBase) {
      const damage = 20
      target.attackEntityFrom(DamageSource.causeIndirectMagicDamage(ctx.entity, ctx.entity), damage)
    }
  }
}