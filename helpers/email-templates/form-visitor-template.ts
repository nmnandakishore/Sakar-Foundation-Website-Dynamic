export const template = (formName: string, data: object, cidLogo: string) => {
    console.log({ data });

    let name = null;
    if (data.name) {
        name = data.name;
    } else if (data.firstName) {
        name = data.firstName;
    }
    else if (data['First Name']) {
        name = data['First Name']
    }

    console.log({ cidLogo });

    let template = `<div style="width:100%; height:100%; background-color:#f2f2f2; padding-top: 40px; padding-bottom: 100px; text-align:center;">`;
    template = template + `<img src="cid:` + cidLogo + `" height="70" alt="Sakar Foundation" style="display:block; margin:auto;">`
    template = template + `<div style="text-align:left; color:#666; border-radius: 3px; background-color:#ffffff; padding: 50px; width: 100%; max-width: 580px; margin:auto; margin-top:25px;">`;

    template = template + `<p>Hello ${name ? " " + name : ""},</p>`;
    template = template + '<p>Thank you for contacting us through Sākār Foundation website. We will contact you soon.</p>';
    template = template + '<p>-Team Sākār</p>';

    template = template + `</div>`;

    template = template + `<div style="color:#aaa; display:block; padding:20px 20%; text-align:center">This email is sent through <a href="sakarfoundation.org" style="color:#aaa;">sakarfoundation.org</a></div>`;
    template = template + `</div>`;


    // console.log({ template })

    return template;
}