import {createStore} from 'redux';

const initialState = {
    id: 0,
    userInfo: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '000.000.0000',
        companyWebsite: 'www.example.com',
        country: '',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: '',
        website: 'www.me.com',
        about: 'I am a software engineer',
        // photo: '',?
        avatar: '',
        coverPhoto: '',
        byEmail: {
            comments: false,
            candidates: false,
            offers: false,
        },
        pushNotifications: {
            everyThing: true,
            sameAsEmail: false,
            noPushNotifications: false,
        },
    }
}
function reducer(state = initialState, action) {
    return state;
}

export const store = createStore(reducer);