ServerEvents.recipes(event => {
  let mystblockup = (input, output) => {
    event.shaped(
      Item.of(output, 1), // arg 1: output
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        A: input,
        B: 'mysticalagriculture:master_infusion_crystal'
      }
    ).keepIngredient('mysticalagriculture:master_infusion_crystal').id('kubejs:mystical_agriculture/block_upgrade/' + output.split(':')[1])
  }
  mystblockup('mysticalagriculture:inferium_block', 'mysticalagriculture:prudentium_block')
  mystblockup('mysticalagriculture:prudentium_block', 'mysticalagriculture:tertium_block')
  mystblockup('mysticalagriculture:tertium_block', 'mysticalagriculture:imperium_block')
  mystblockup('mysticalagriculture:imperium_block', 'mysticalagriculture:supremium_block')
})

//Tier 1 (Inferium): Basic tier, used to start the mod.
//Tier 2 (Prudentium): Upgraded from Inferium, used for faster growth and better gear.
//Tier 3 (Tertium/Intermedium): Middle-tier, offering higher yield.
//Tier 4 (Imperium): High-tier, used for more advanced resources.
//Tier 5 (Supremium): Highest tier, provides maximum benefits and powerful tools. 