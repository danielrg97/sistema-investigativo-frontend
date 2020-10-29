/**
 * Valida el token
 * @param{history de react-router-dom}
 */
export const validateIfHasToken = history => {
    if(!localStorage.getItem("Authorization") && !localStorage.getItem("UserInSession")){
        history.push("/");
    }
}

export const toastProperties = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};