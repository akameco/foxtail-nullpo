export default (fox) => {
  fox.add((res) => {
    if (res.text === 'ぬるぽ') res.reply('ガッ')
  })
}
