"use server"

import { EmailContent, EmailProductInfo, NotificationType } from '@/types';
import nodemailer from 'nodemailer';

const Notification = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
}

export async function generateEmailBody(
  product: EmailProductInfo,
  type: NotificationType
  ) {
  const THRESHOLD_PERCENTAGE = 40;
  // Shorten the product title
  const shortenedTitle =
    product.title.length > 20
      ? `${product.title.substring(0, 20)}...`
      : product.title;

  let subject = "";
  let body = "";

  switch (type) {
    case Notification.WELCOME:
      subject = `Welcome to Price Tracking for ${shortenedTitle}`;
      body = `
      <div>
      <h2>Welcome to PriceWise 🚀</h2>
          <p>You are now tracking ${product.title}.</p>
          <p>Here's an example of how you'll receive updates:</p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>${product.title} is back in stock!</h3>
            <p>We're excited to let you know that ${product.title} is now back in stock.</p>
            <p>Don't miss out - <a href="${product.url}" target="_blank" rel="noopener noreferrer">buy it now</a>!</p>
            
          </div>
          <p>Stay tuned for more updates on ${product.title} and other products you're tracking.</p>
        </div>
      `;
      break;

    case Notification.CHANGE_OF_STOCK:
      subject = `${shortenedTitle} is now back in stock`;
      body = `
        <div>
          <h4>Hey, ${`product.title`} is now restocked! Buy your favorite products before they run out</h4>
          <p>See the product <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      `;
      break;

    case Notification.LOWEST_PRICE:
      subject = `Lowest price offer for ${shortenedTitle}`;
      body = `
        <div>
          <h4>Hey, ${`product.title`} has reached its lowest price</h4>
          <p>Buy your favourite products <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a> now.</p>
        </div>
      `;
      break; 

    case Notification.THRESHOLD_MET:
      subject = `Exclusive Discount Inside - Limited Time Offer for ${shortenedTitle}`;
      body = `
        <div>
          <h4>Hey, ${`product.title`} is now available on discount ${THRESHOLD_PERCENTAGE}%!</h4>
          <p>Buy your favorite product from <a href="${product.url}" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      `;
      break;

    default:
      throw new Error("Invalid notification type.");
  }

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  pool: true,
  service: 'hotmail',
  port: 2525, 
  auth: {
    user: 'thanushreer22@outlook.com',
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
 // Set the sender information
 sender: {
  name: 'Thanushree R',  // Set the recognizable sender name
  address: 'thanushreer22@outlook.com',  // Set the sender email address
},
});

export const sendEmail = async (emailContent: EmailContent, sendTo: string[]) => {
  const mailOptions = {
    from: 'Thanushree R <thanushreer22@outlook.com>',
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  }

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error('Error sending email:', error);
      // Handle specific error types (e.g., authentication issues) if needed
      return;
    }
  
    console.log('Email sent:', info);
  });
}