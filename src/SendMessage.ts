export const sendMessage = async (
    name: string,
    email: string,
    canvasType: string,
    canvasSize: string,
    additional: string) => {

    const text = `Name: ${name}, Email: ${email}, Type: ${canvasType}, Size: ${canvasSize}, additional: ${additional}`;
    alert(text);
}
