import tweets from './data/tweets.json';  // an array of object

const postReducer = (state= tweets, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(
                action.tweets
            )

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.like--;
                    } else {
                        tweet.liked = true;
                        tweet.like++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);
        default:
            return(state);
    }

};

export default postReducer;
