/**
 * Created by shubham on 15/8/16.
 */
//
// Helper function
//
Template.available_user.helpers({
    /**
     * Check if the iterated user was authorized.
     *
     * @param {string} userId - user session Id
     *
     * @returns {boolean}
     */
    isMyUser: function (userId) {
        return userId === Meteor.userId();
    }
});
