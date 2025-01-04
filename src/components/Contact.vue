<template>
  <div class="footer">
    <div class="footer-content">
      <p>&copy; Hari Prasannaa Thangavel Ravi 2024</p>
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
      <div class="footer-links">
        <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
        <a href="/terms-of-use" class="footer-link">Terms of Use</a>
      </div>
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
  justify-content: space-between;
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

.footer-links a {
  margin: 0 15px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
}

.footer-links a:hover {
  color: #0073e6;
}
</style>
