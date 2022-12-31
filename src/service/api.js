import { firebase } from "../service/Firebase";
const db = firebase.firestore();

export const getMyServicos = () => {
    return new Promise((resolve, reject) => {
        db.collection("servicos")
            .get()
            .then((snapchot) => {
                let servicosLista = [];
                snapchot.forEach((item) => {
                    servicosLista.push({
                        ...item.data(),
                        key: item.id,
                    });
                });
                resolve(servicosLista);
            })
            .catch((erro) => reject(erro));
    });
};

export const getMyProfissional = () => {
    return new Promise((resolve, reject) => {
        db.collection("profissional")
            .get()
            .then((snapchot) => {
                let servicosLista = [];
                snapchot.forEach((item) => {
                    servicosLista.push({
                        ...item.data(),
                        key: item.id,
                    });
                });
                resolve(servicosLista);
            })
            .catch((erro) => reject(erro));
    });
};
export const saveMyServicos = (servicos, chave = "") => {
    if (chave === "") {
        console.log("Opa1");
        return new Promise((resolve, reject) => {
            db.collection("servicos")
                .add(servicos)
                .then((result) => resolve(result.id))
                .catch((erro) => reject(erro));
        });
    } else {
        return new Promise((resolve, reject) => {
            console.log("deu ruin");

            db.collection("servicos")
                .doc(chave)
                .update(servicos)
                .then(() => resolve())
                .catch((erro) => reject(erro));
        });
    }
};

export const deleteMyServicos = (servicos) => {
    return new Promise((resolve, reject) => {
        db.collection("profissional")
            .doc(servicos.key)
            .delete()
            .then(() => resolve())
            .catch((erro) => reject(erro));
    });
};
