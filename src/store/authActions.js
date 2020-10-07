export const registerWithEmail = (email, password) => {
    console.log("email", email);
    console.log("password", password);
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const loginWithEmail = (email, password) => {
    console.log("email", email);
    console.log("password", password);
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const loginWithGoogle = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const logoutUser = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}