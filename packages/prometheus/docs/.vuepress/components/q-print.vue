<template>
  <div>
    <form class="print-guide">
      <div class="form-controls" style="width:600px">
        <label>
          同时也支持表单上传方式选择图片：
          <input type="file" id="input-file" accept="image/*" multiple />
        </label>
        <h3 id="drop" style="width:100%;background:gray">全页面支持拖拽上传</h3>
        <img
          class="print-gif"
          src="http://img003.qufenqi.com/products/ea/52/ea528ec54eb4a0dce6ed7903a4b6e945.gif"
          style="height:350px"
          alt
        />
      </div>
    </form>
    <!--startprint-->
    <div class="page-container" id="pages"></div>
    <!--endprint-->
  </div>
</template>

<script>
export default {
  props: {
    // html: [String, Number]
  },
  mounted() {
    (function() {
      const $file = document.getElementById("input-file");
      const $drop = document;
      const $pages = document.getElementById("pages");
      const prevFiles = [];

      function imageLoader(file, $page) {
        const preview = new Image();
        const reader = new FileReader();
        $page.appendChild(preview);

        reader.addEventListener(
          "load",
          function() {
            preview.src = reader.result;
          },
          false
        );

        if (file) {
          reader.readAsDataURL(file);
        }
      }

      function loadImage() {}

      // event
      $file.addEventListener("change", e => {
        const { files } = e.target;
        handleFiles(files);
      });
      function handleFiles(files) {
        prevFiles.push(...files);
        const nextFiles = prevFiles;
        const len = nextFiles.length;
        const pages = [];

        const pageCount = Math.ceil(len / 8);

        $pages.innerHTML = "";

        for (let i = 0; i < pageCount; i += 1) {
          const $page = document.createElement("div");
          $page.className = "page--print";
          // $pages.appendChild('<!--startprint"+oper+"-->')
          $pages.appendChild($page);
          pages.push($page);
        }

        for (let i = 0; i < len; i += 1) {
          const $page = pages[Math.floor(i / 8)];
          imageLoader(nextFiles[i], $page);
        }
      }
      $drop.addEventListener("drop", drop, false);
      $drop.addEventListener("dragenter", dragenter, false);
      $drop.addEventListener("dragover", dragover, false);

      function drop(e) {
        e.stopPropagation();
        e.preventDefault();

        var dt = e.dataTransfer;
        var files = dt.files;

        handleFiles(files);
      }
      function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
      }

      function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    })();
  },
  data() {
    return {
      msg: "Hello this is <Foo-Bar>"
    };
  }
};
</script>
<style lang="css" >
.page--print {
  width: 210mm;
  height: 297mm;
  padding: 50px 30px 0;
}
.page-container img {
  display: inline-block;
  width: 25%;
}
.print-gif {
  transform: scale(0.8, 0.8);
}
.print-gif:hover {
  transform: scale(1.5, 1.5);
}
@media print {
  html,
  body {
    width: 210mm;
    background-color: #fff;
  }
  .print-guide,
  .navbar {
    display: none;
  }
}
@page {
  size: A4;
  margin: 0;
}
</style>