
import "./globals.css";


export const metadata = {
  title: "SpeakWell English Academy | Best Spoken English & IELTS Coaching",
  description: "Join SpeakWell English Academy for the best spoken English & IELTS coaching in India. Transform your communication skills with expert trainers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
