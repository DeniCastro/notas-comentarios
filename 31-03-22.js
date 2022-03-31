// Maneira prática e que permite reutilização:
// 1 -  Cria o objeto:

const socialNetworks = ['Instagram', 'WhatsApp', 'TikTok', 'Facebook']

// 2 - Cria outro objeto pra receber a arrow F
const mostraRedes = ((socialNetwork, index, array) => {
    console.log(index, socialNetwork)
})

// 3 - Chama utilizando forEach:
socialNetworks.forEach(mostraRedes);

// Teste com outros objetos:
const midiasAntigas = ['Orkut', 'MSN', 'Skype']
midiasAntigas.forEach(mostraRedes)

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Cria o objeto:
const midiasSociais = ['Instagram', 'WhatsApp', 'Twitter']

// chama o forEach, usa index e array com a arrow f.
midiasSociais.forEach((midia, index, array)=>{
    console.log(index, midia)
})
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

