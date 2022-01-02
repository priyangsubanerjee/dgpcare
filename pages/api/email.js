import nodemailer from 'nodemailer';
export default async function (req, res) {

    const { method } = req
    const {email, message, subject, from} = req.body

    switch (method) {

        case 'POST':

            const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.USER_NAME,
                pass: process.env.USER_PASSWORD,
            },
            secure: true,
            })

            const mailData = {

            from: from,
            to: email,
            subject: subject,
            html: message,
            }

            transporter.sendMail(mailData, function (err, info) {
            if(err)
            {
                res.status(500).json({

                    success: false,
                    message: 'Internal server error',
                })
            }
            else{
                
                res.status(200).json({

                    success: true,
                    message: 'Email sent successfully',
                })
            }
            })

            break;

        default:

            res.status(500).json({

                success: false,
                message: 'Internal server error'
            })

    }
}