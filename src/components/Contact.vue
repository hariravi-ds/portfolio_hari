<template>
  <div class="footer">
    <div class="footer-content">
      <div class="header-icons">
        <a
          href="mailto:hariprasannaa.thangavelravi@gwu.edu"
          aria-label="E-Mail"
        >
          <i class="fas fa-envelope fa-sm"></i>
        </a>
        <a
          href="https://x.com/sangeehariravi"
          target="_blank"
          aria-label="GitHub"
        >
          <i class="fab fa-twitter fa-sm"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hari-prasannaa"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin fa-sm"></i>
        </a>
      </div>
      <p>&copy; Hari Prasannaa Thangavel Ravi 2024</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 20px 0;
  text-align: center;
  max-height: 200px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  color: black;
}

.footer p {
  margin: 0;
}

.header-icons {
  display: flex;
  justify-content: center;
}

.header-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 8px;
  color: white;
  background: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.header-icons a:hover {
  color: #1e90ff;
  border-color: #1e90ff;
}
</style>
