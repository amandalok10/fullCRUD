import Controller from '@ember/controller';

//how to delete a post cruD
export default Controller.extend({
  actions: {
    deletePost(post){
      let confirmed = window.confirm("are you sure you wanna delete this post");
      if (confirmed){
      post.destroyRecord();
    }; 
    }
  }
});
