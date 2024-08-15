const firebaseConfig = {
    apiKey: "AIzaSyDlfsgnlW_bEaScNBBbiHsSMVPqesBRl_I",
    authDomain: "site-monsterzilla.firebaseapp.com",
    databaseURL: "https://site-monsterzilla-default-rtdb.firebaseio.com",
    projectId: "site-monsterzilla",
    storageBucket: "site-monsterzilla.appspot.com",
    messagingSenderId: "28236738932",
    appId: "1:28236738932:web:d1a5be3a66daaf7d6ffc21"
  };
  firebase.initializeApp(firebaseConfig);
  
  //Tabelas
  const db = firebase.firestore();
  const storage = firebase.storage();

function cadastrar(){
    const nome = document.getElementById("nome").value;
    const id = document.getElementById("id").value;
    const valor = document.getElementById("valor").value;
    const desc = document.getElementById("desc").value;
    const foto = document.getElementById("foto").files[0];

    //upload da foto
    const storageref=firebase.storage().ref();
    const fotoref = storageref.child(`images/${nome}`)

    fotoref.put(foto).then(snapshot => {
        return snapshot.ref.getDownloadURL();
    }).then(fotoURL =>{
        db.collection("Jogos").doc(id).set({
            desc: desc,
            valor: valor,
            foto: nome,
            nome: nome,
            id: id
        })
    })
    alert("Produto cadastrado")
}