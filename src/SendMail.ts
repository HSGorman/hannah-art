export const sendEmail = (
    name: string,
    email: string,
    canvasType: string,
    canvasSize: string,
    additional: string) => {
    alert(`Name: ${name}, Email: ${email}, Type: ${canvasType}, Size: ${canvasSize}, additional: ${additional}`);
}
