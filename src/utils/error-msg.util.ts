import Swal from "sweetalert2";

export const GeneralErrorMessage = (onClick?: () => void) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please try again later",
        confirmButtonColor: "#5469d4",
    }).then((res) => {
        if (res.isConfirmed && onClick) {
            onClick();
        }
    })
}