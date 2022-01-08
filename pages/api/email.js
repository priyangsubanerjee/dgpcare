import nodemailer from 'nodemailer';
export default async function (req, res) {

    const { method } = req
    const {email, message} = req.body

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

            const currentDate = new Date()
            const date = currentDate.getDate()
            const month = currentDate.getMonth()
            const year = currentDate.getFullYear()
            const hours = currentDate.getHours()
            const minutes = currentDate.getMinutes()

            const mailDate = `${date}/${month}/${year} ${hours}:${minutes}`

            const mailData = {

            from:  email.toLowerCase(),
            to:  process.env.USER_NAME,
            subject: "Contact Form Submission",
            html: `
            <h1>Contact Form Submission</h1>
            <h3>From: ${email}</h3>
            <p>Message: ${message}</p>
            <br><br>
            
            <p>Sent at: ${mailDate}</p>`
            ,
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