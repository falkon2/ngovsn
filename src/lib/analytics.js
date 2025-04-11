import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

// Safe wrapper for analytics calls
const safeLogEvent = (eventName, eventParams) => {
    try {
        if (analytics) {
            console.log(`Logging event: ${eventName}`, eventParams);
            logEvent(analytics, eventName, eventParams);
        } else {
            console.warn(`Analytics not initialized, couldn't log event: ${eventName}`);
        }
    } catch (error) {
        console.error(`Error logging event ${eventName}:`, error);
    }
};

// Track page views
export const trackPageView = (pageName) => {
    const params = {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname
    };
    safeLogEvent('page_view', params);
};

// Track user interactions
export const trackEvent = (eventName, eventParams = {}) => {
    safeLogEvent(eventName, eventParams);
};

// Track donation events
export const trackDonation = (amount, method) => {
    safeLogEvent('donation', {
        amount: amount,
        method: method,
        currency: 'INR'
    });
};

// Track volunteer signups
export const trackVolunteerSignup = (formData) => {
    safeLogEvent('volunteer_signup', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
    });
};

// Track social media clicks
export const trackSocialMedia = (platform) => {
    safeLogEvent('social_media_click', {
        platform: platform
    });
};

// Track form submissions
export const trackFormSubmission = (formName, formData) => {
    safeLogEvent('form_submission', {
        form_name: formName,
        ...formData
    });
}; 