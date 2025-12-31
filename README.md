<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UUM Management Museum Audio Guide Website</title>
  <link rel="stylesheet" href="style_try.css">
</head>
<body>
  <header class="uum-header">
  <!-- LEFT: Logo + Subtitle -->
  <div class="header-left">
    <img src="uumlogo.png" alt="UUM Logo" class="uum-logo">
    <span class="header-subtitle" id="header-subtitle">
    </span>
  </div>

  <!-- CENTER: Main title -->
  <div class="header-center">
    <h1 id="title"></h1>
  </div>

  <!-- RIGHT: Navigation -->
  <nav class="header-right">
    <a id="nav-audio" href="try_ucd.html"></a>
    <a id="nav-feedback" href="feedback.html"></a>
    <select id="lang-select">
      <option value="ms">BM</option>
      <option value="en">EN</option>
    </select>
  </nav>
  </header>

  <main>
    <!-- AUDIO PAGE -->
    <section id="audio-page" class="page active">
      <h2 id="audio-heading"></h2>

      <div class="segment">
        <img src="ZONA.jpg" alt="Segment 1">
        <h3 id="seg1-title"></h3>
        <audio class="audio-bm" controls src="Zon A (Malay).mp3"></audio>
        <audio class="audio-en" controls src="Zon A (English).mp3" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg1-trans"></button>
        <div class="transcript" id="seg1-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONB.jpg" alt="Segment 2">
        <h3 id="seg2-title"></h3>
        <audio class="audio-bm" controls src="Zon B (Malay).mp3"></audio>
        <audio class="audio-en" controls src="Zon B (English).mp3" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg2-trans"></button>
        <div class="transcript" id="seg2-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONC.jpg" alt="Segment 3">
        <h3 id="seg3-title"></h3>
        <audio class="audio-bm" controls src="Zon C (Malay).mp3"></audio>
        <audio class="audio-en" controls src="Zon C (English).mp3" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg3-trans"></button>
        <div class="transcript" id="seg3-trans"></div>
      </div>

      <div class="segment">
        <img src="ZOND.jpg" alt="Segment 4">
        <h3 id="seg4-title"></h3>
        <audio class="audio-bm" controls src="Zon D (Malay).mp3"></audio>
        <audio class="audio-en" controls src="Zon D (English).mp3" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg4-trans"></button>
        <div class="transcript" id="seg4-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONE.jpg" alt="Segment 5">
        <h3 id="seg5-title"></h3>
        <audio class="audio-bm" controls src="Zon E (Malay).mp3"></audio>
        <audio class="audio-en" controls src="Zon E (English).mp3" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg5-trans"></button>
        <div class="transcript" id="seg5-trans"></div>
      </div>

    </section>
  </main>

  <footer>
    <p id="footer1"></p>
    <p id="footer2"></p>
    <p id="footer3"></p>
    <p id="footer4"></p>
  </footer>

  <script src="script_try.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UUM Museum Feedback</title>
  <link rel="stylesheet" href="feedback_style.css">
</head>
<body>

  <!-- ===== HEADER ===== -->
  <header class="uum-header">
    <!-- LEFT: Logo + Subtitle -->
    <div class="header-left">
      <img src="uumlogo.png" alt="UUM Logo" class="uum-logo">
      <span class="header-subtitle" id="header-subtitle"></span>
    </div>

    <!-- CENTER: Main title -->
    <div class="header-center">
      <h1 id="title">Visitor Rating</h1>
    </div>

    <!-- RIGHT: Navigation -->
    <nav class="header-right">
      <a id="nav-audio" href="try_ucd.html">Audio Guide</a>
      <a id="nav-feedback" href="feedback.html">Feedback</a>
      <select id="lang-select">
        <option value="ms">BM</option>
        <option value="en">EN</option>
      </select>
    </nav>
  </header>

  <!-- ===== MAIN ===== -->
  <main>
    <section class="feedback-container">
      <h2>Rate Your Experience</h2>

      <form id="ratingForm">
        <label>Select your rating:</label>

        <div class="star-rating">
          <input type="radio" name="rating" value="5" id="star5"><label for="star5">★</label>
          <input type="radio" name="rating" value="4" id="star4"><label for="star4">★</label>
          <input type="radio" name="rating" value="3" id="star3"><label for="star3">★</label>
          <input type="radio" name="rating" value="2" id="star2"><label for="star2">★</label>
          <input type="radio" name="rating" value="1" id="star1"><label for="star1">★</label>
        </div>
        <!-- Move the button below the rating -->
        <div class="submit-btn-container">
            <button type="submit" class="submit-btn">Submit Rating</button>
        </div>
      </form>

      <div class="feedback-display">
        <h3>Average Rating</h3>
        <p><span id="averageRating">0</span> / 5 ⭐</p>
        <p>Total Ratings: <span id="totalRatings">0</span></p>
      </div>

      <a href="try_ucd.html" class="back-btn">⬅ Back to Audio</a>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer>
    <p id="footer1">UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a></p>
    <p id="footer2">Email: museum@uum.edu.my | Tel: +604 928 2614</p>
    <p id="footer3">© 2025 UUM Museum Audio Guide. All Rights Reserved.</p>
    <p id="footer4"></p>
  </footer>

  <script src="feedback_script.js"></script>
</body>
</html>
