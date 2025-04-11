# Voice of Strays and Nature

A modern web platform dedicated to helping stray animals through community support and donations.

## Features

- Modern, responsive design
- Interactive photo gallery
- Secure donation system using Razorpay
- Real-time updates and animations
- Mobile-friendly interface

## Tech Stack

- SvelteKit
- TailwindCSS
- Firebase Hosting
- Razorpay Payment Gateway
- GSAP Animations

## Setup

1. Clone the repository:
```bash
git clone https://github.com/falkon2/ngovsn.git
cd ngovsn
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Deployment

The site is deployed on Firebase Hosting. To deploy:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Deploy:
```bash
firebase deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Icons from Heroicons
- Animations powered by GSAP
