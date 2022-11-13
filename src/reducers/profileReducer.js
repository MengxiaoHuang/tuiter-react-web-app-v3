

let profileData = {
    Name: 'Katie Wong',
    tweets: 890,
    handle: 'katiewong',
    profilePicture: '/pics/kjaer.jpg',
    bannerPicture: '/pics/Simon-Kjaer.jpeg',
    bio: 'This is Katie Wong \n' +
        '@kw\n' +
        ' + proud mom of \n' +
        '@yy\n' +
        '.',
    website: 'netflix.com',
    location: 'Las Gatos, CA',
    dateOfBirth: '12/2/2010',
    dateJoined: '07/2022',
    followingCount: 23,
    followersCount: "10K"
}

const profileReducer = (state = profileData, action) => {
    switch (action.type){
        case "update-profile":
            return action.profile;
        case "fetch-profile":
            return action.profile;
        default:
            return state;
    }
};

export default profileReducer;
