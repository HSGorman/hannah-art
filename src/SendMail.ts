import * as SendGrid from "@sendgrid/mail";

export const sendEmail = (
    name: string,
    email: string,
    canvasType: string,
    canvasSize: string,
    additional: string) => {

    const text = `Name: ${name}, Email: ${email}, Type: ${canvasType}, Size: ${canvasSize}, additional: ${additional}`;
    console.log(text);

    const msg = {
        to: 'Artisanpaints91@gmail.com',
        from: 'Artisanpaints91@gmail.com',
        subject: 'Painting request',
        text: `Name: ${name}, Email: ${email}, Type: ${canvasType}, Size: ${canvasSize}, additional: ${additional}`,
        html: `<strong>Let's Paint</strong>`,
    };
    SendGrid.setApiKey('XXX');
    SendGrid.send(msg)
        .then(() => {
            console.log(`Success ${text}`);
        })
        .catch((e) => {
            console.log(`Error ${e}`);
        });
}
