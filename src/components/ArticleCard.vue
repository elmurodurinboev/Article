<template>
   <div class="col">
      <div class="card shadow-sm">
         <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
         >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
         </svg>
         <div class="card-body">
            <p class="text-black fw-medium">{{ article.title }}</p>
            <p class="card-text">
               This is a wider card with supporting text below as a natural
               lead-in to additional content. This content is a little bit
               longer.
            </p>
            <div
               class="d-flex justify-content-between align-items-center card-footer"
            >
               <div class="btn-group">
                  <button
                     type="button"
                     class="btn btn-sm btn-outline-secondary"
                  >
                     Read More
                  </button>
                  <!-- <button
                     type="button"
                     class="btn btn-sm btn-outline-secondary"
                  >
                     Edit
                  </button> -->
               </div>
               <small class="text-body-secondary">{{
                  new Date(article.createdAt).toLocaleDateString("us")
               }}</small>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   name: "article-card",
   props: {
      article: {
         type: Object,
         required: true,
      },
   },
}
</script>
<style></style>
