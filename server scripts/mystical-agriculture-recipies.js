ServerEvents.recipes(event => {
    event.remove({output: 'mysticalagriculture:tertium_sword'})
    event.remove({output: 'mysticalagriculture:imperium_sword'})
    event.remove({output: 'mysticalagriculture:supremium_sword'})
    event.remove({output: 'mysticalagriculture:awakened_supremium_sword'})
    event.remove({output: 'mysticalagriculture:insanium_sword'})
    event.remove({output: 'mysticalagriculture:unobtainium_sword'})
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
	event.remove('mysticalagriculture:tertium_sword')
    event.remove('mysticalagriculture:imperium_sword')
    event.remove('mysticalagriculture:supremium_sword')
    event.remove('mysticalagriculture:awakened_supremium_sword')
    event.remove('mysticalagriculture:insanium_sword')
    event.remove('mysticalagriculture:unobtainium_sword')
})