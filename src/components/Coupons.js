import React from 'react';

import './coupons.scss';
const Coupons = () => {
    const coupons = [
        {
          "Coupon Name": "Black Friday",
          "Code": "BlackFriday",
          "Amount": "50%",
          "Status": "Scheduled",
          "Products": "All Products",
          "Start Date": "02, May 2021",
          "Expiry": "Today"
        },
        {
          "Coupon Name": "Cyber Monday",
          "Code": "cybermonday",
          "Amount": "50%",
          "Status": "Scheduled",
          "Products": "All Products",
          "Start Date": "03, Jun 2021",
          "Expiry": "Yesterday"
        },
        {
          "Coupon Name": "Welcome Offer",
          "Code": "welcome10",
          "Amount": "10%",
          "Status": "Expired",
          "Products": "Mobiles",
          "Start Date": "14, Aug 2021",
          "Expiry": "15, Aug 2021"
        },
        {
          "Coupon Name": "Upgrade Offer",
          "Code": "Lucky30",
          "Amount": "30%",
          "Status": "Expired",
          "Products": "Laptops",
          "Start Date": "15, Dec 2021",
          "Expiry": "Today"
        },
        {
          "Coupon Name": "Summer Offer",
          "Code": "summer20",
          "Amount": "20%",
          "Status": "Draft",
          "Products": "Mobiles & Laptops",
          "Start Date": "20, Apr 2021",
          "Expiry": "Tomorrow"
        },
        {
          "Coupon Name": "VIP List",
          "Code": "BKGHYATHOJ",
          "Amount": "50.00Rs",
          "Status": "Draft",
          "Products": "First 5 Users",
          "Start Date": "25, Jul 2021",
          "Expiry": "28, Jul 2021"
        },
        {
          "Coupon Name": "Survey Beta",
          "Code": "A35874589",
          "Amount": "5.00Rs",
          "Status": "Active",
          "Products": "Appliances",
          "Start Date": "22, Aug 2021",
          "Expiry": "30, Aug 2021"
        },
        {
          "Coupon Name": "Repeat Customers",
          "Code": "80A845756",
          "Amount": "20.00Rs",
          "Status": "Active",
          "Products": "Gadgets",
          "Start Date": "09, Sep 2021",
          "Expiry": "15, Sep 2021"
        },
        {
          "Coupon Name": "Instagram Promo",
          "Code": "insta50",
          "Amount": "50%",
          "Status": "Active",
          "Products": "Mobiles & Laptops",
          "Start Date": "01, Jan 2021",
          "Expiry": "18, Jan 2021"
        },
        {
          "Coupon Name": "Twitter Promo",
          "Code": "twit25",
          "Amount": "25%",
          "Status": "Active",
          "Products": "All Products",
          "Start Date": "10, Feb 2021",
          "Expiry": "1 hour ago"
        },
        {
          "Coupon Name": "Rainy Offer",
          "Code": "rainy offer30",
          "Amount": "30.00Rs",
          "Status": "Active",
          "Products": "All Products",
          "Start Date": "23, Jan 2022",
          "Expiry": "2 hour ago"
        }
      ];
  return (
    <div>
      <h2>Coupons</h2>
      <table>
        <thead>
          <tr>
            <th>Coupon Name</th>
            <th>Code</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Products</th>
            <th>Start Date</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index}>
              <td>{coupon["Coupon Name"]}</td>
              <td>{coupon.Code}</td>
              <td>{coupon.Amount}</td>
              <td>{coupon.Status}</td>
              <td>{coupon.Products}</td>
              <td>{coupon["Start Date"]}</td>
              <td>{coupon.Expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coupons;
