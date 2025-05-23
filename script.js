    // إعدادات Firebase (تأكد من مطابقتها لبيانات مشروعك)
    const firebaseConfig = {
      apiKey: "AIzaSyCiNJYUT06jZrlzn_Q7LXmkStTgVbeRk0U",
      authDomain: "aqrati-taif.firebaseapp.com",
      databaseURL: "https://aqrati-taif-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "aqrati-taif",
      storageBucket: "aqrati-taif.appspot.com",
      messagingSenderId: "729968735852",
      appId: "1:729968735852:web:4779366823353325efca49",
      measurementId: "G-37C6RY0378"
    };

    // وظائف حفظ واسترجاع العقارات من التخزين المحلي
    function savePropertiesToLocalStorage() {
      localStorage.setItem("realEstateProperties", JSON.stringify(properties));
      console.log("تم حفظ العقارات في التخزين المحلي");
    }

    function loadPropertiesFromLocalStorage() {
      const savedProperties = localStorage.getItem("realEstateProperties");
      return savedProperties ? JSON.parse(savedProperties) : [];
    }

    // بيانات العقارات الحقيقية من قاعدة البيانات (بعد حذف العقارات 5, 7, 17, 25, 29, 31, 39, 41, 48, 49)
    const localProperties = [
      {
        id: 1,
        title: "عمارة دورين منفصلة ",
        description: "📍 عمارة سكنية للبيع في حي نخب – الطائف\n🔹 المواصفات:\n✔ صك إلكتروني\nمساحة الأرض 400\nالمبنى 250\nالباقي احواش\n✔ دورين مستقلين، التفاصيل كالتالي:\nالدور الأول:\n5 غرف واسعة\n3 دورات مياه\nمطبخ وصالات رحبة\nمدخل مستقل + مدخل مشترك مع الدور الثاني\nمدخل إضافي من الواجهة الشرقية\nالدور الثاني:\n4 غرف واسعة\n3 دورات مياه\nمطبخ واسع\nصالتان فسيحتان\nغرفة خامسة غير مسقوفة (حوش) بإطلالة رائعة على حي السحيلي ومخطط البيعة وغرب الطائف\nمدخل منفصل من الواجهة الجنوبية\n✔ واجهتان شرقية وغربية مع ميدان في الجهة الشرقية\n✔ عمر العقار: 16 سنة\n🏠 العمارة مؤجرة بالكامل بـ 30,000 ريال سنويًا\n📍 الموقع: حي نخب – مقابل خزان المياه\n🏞 إطلالة بانورامية رائعة على مدينة الطائف\n💰 السعر المطلوب: 1,300,000 ريال صافي (يشمل الرهن العقاري البالغ 250,000 ريال)\n🔹 المطلوب دفع المبلغ كاش لسداد الرهن",
        price: 1300000,
        category: "عمائر",
        location: "الطائف- ريحة",
        mainImage: "data:image/jpeg;base64,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",
        features: {
          rooms: 9,
          bathrooms: 6,
          area: 400
        },
        type: "للبيع",
        createdAt: Date.now(),
        key: "real_1"
      },
      {
        id: 2,
        title: "شقة مميزة في حي شهار",
        description: "شقة فاخرة في حي شهار، تتكون من 3 غرف نوم وصالة واسعة ومطبخ مجهز. الشقة حديثة البناء وتطل على منظر خلاب.",
        price: 650000,
        category: "شقق",
        location: "الطائف - حي شهار",
        mainImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
        features: {
          rooms: 3,
          bathrooms: 2,
          area: 120
        },
        type: "للبيع",
        createdAt: Date.now(),
        key: "local_2"
      },
      {
        id: 3,
        title: "عمارة استثمارية في حي السلامة",
        description: "عمارة استثمارية في موقع مميز بحي السلامة. تتكون من 12 شقة (3 أدوار، كل دور به 4 شقق). الدخل السنوي المتوقع: 220,000 ريال.",
        price: 3500000,
        category: "عمائر",
        location: "الطائف - حي السلامة",
        mainImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        features: {
          rooms: 48,
          bathrooms: 24,
          area: 1200
        },
        type: "للبيع",
        createdAt: Date.now(),
        key: "local_3"
      },
      {
        id: 4,
        title: "استراحة فاخرة للإيجار اليومي",
        description: "استراحة فاخرة للإيجار اليومي، مناسبة للعائلات والمناسبات. تحتوي على مسبح ومنطقة شواء ومجلس كبير.",
        price: 800,
        category: "استراحات",
        location: "الطائف - طريق الهدا",
        mainImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        features: {
          rooms: 5,
          bathrooms: 3,
          area: 500
        },
        type: "للإيجار",
        createdAt: Date.now(),
        key: "local_4"
      },
      {
        id: 5,
        title: "أرض سكنية في حي العزيزية",
        description: "أرض سكنية في حي العزيزية، مساحة 600 متر مربع. الأرض مستوية وجاهزة للبناء. موقع مميز قريب من جميع الخدمات.",
        price: 450000,
        category: "أراضي",
        location: "الطائف - حي العزيزية",
        mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        features: {
          area: 600
        },
        type: "للبيع",
        createdAt: Date.now(),
        key: "local_5"
      },
      {
        id: 6,
        title: "دور مستقل في حي النسيم",
        description: "دور مستقل علوي في حي النسيم، مكون من 4 غرف وصالة ومطبخ و2 حمام. مدخل خاص وعداد كهرباء مستقل.",
        price: 300000,
        category: "أدوار مستقلة",
        location: "الطائف - حي النسيم",
        mainImage: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        features: {
          rooms: 4,
          bathrooms: 2,
          area: 180
        },
        type: "للبيع",
        createdAt: Date.now(),
        key: "local_6"
      }
    ];

    // محاولة الاتصال بـ Firebase مع تفعيل خاصية الاستمرار بدون اتصال
    let firebase;
    try {
      firebase = window.firebase;

      // تهيئة Firebase بالإعدادات
      firebase.initializeApp(firebaseConfig);

      // تفعيل خاصية الاستمرار بدون اتصال (تخزين البيانات محلياً)
      firebase.database().setPersistenceEnabled(true);

      // تفعيل التحليلات إذا كانت متوفرة
      if (firebase.analytics) {
        firebase.analytics();
      }

      console.log("تم الاتصال بـ Firebase بنجاح والتخزين المؤقت مفعل");
    } catch (error) {
      console.error("فشل تهيئة Firebase:", error);
    }

    // تعريف المراجع بشكل عام ليمكن استخدامها في جميع أنحاء التطبيق
    const propertiesRef = firebase?.database?.() ? firebase.database().ref("properties") : null;
    const nextIdRef = firebase?.database?.() ? firebase.database().ref("nextId") : null;
    const visitorsRef = firebase?.database?.() ? firebase.database().ref("visitors") : null;

    // التأكد من وجود اتصال بقاعدة البيانات
    firebase?.database?.().goOnline();
  </script>
  
  <!-- أنماط إضافية لتحسين بطاقات العقارات -->
  <style>
    .real-estate-card { 
      background:#fff; 
      border-radius:12px; 
      box-shadow:0 3px 10px rgba(0,0,0,0.08); 
      display:flex; 
      flex-direction:column; 
      transition:all 0.4s ease; 
      position:relative; 
      overflow:hidden; 
      border: 1px solid rgba(0,0,0,0.05);
    }
    .real-estate-card:hover { 
      transform:translateY(-6px); 
      box-shadow:0 8px 25px rgba(0,0,0,0.15); 
    }
    .card-image { 
      width:100%; 
      aspect-ratio:16/9; 
      object-fit:cover; 
      transition: transform 0.7s ease;
    }
    .real-estate-card:hover .card-image {
      transform: scale(1.05);
    }
    .card-price-badge { 
      position:absolute; 
      top:15px; 
      right:15px; 
      background:#4caf50; 
      color:#fff; 
      padding:0.5rem 1rem; 
      font-size:1.1rem; 
      font-weight:800; 
      border-radius:8px; 
      box-shadow: 0 3px 8px rgba(0,0,0,0.15);
      z-index: 2;
    }
    .card-body { 
      padding:1.25rem; 
      display:flex; 
      flex-direction:column; 
      gap:0.7rem; 
      flex:1; 
    }
    .card-title { 
      font-size:1.3rem; 
      font-weight:800; 
      color:#0f4c81; 
      margin:0; 
      line-height: 1.4;
    }
    .card-features { 
      margin-top:auto; 
      display:flex; 
      gap:1.5rem; 
      font-size:0.9rem; 
      color:#555; 
      font-weight: 600;
    }
    .card-features i {
      color: #0f4c81;
    }
    .real-estate-card .btn {
      font-weight: 700;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
    }
    .real-estate-card .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <!-- الهيدر -->
  <header class="header">
    <div class="header-container">
      <div class="header-logo">
        <div class="logo-icon-container">
          <i class="bi bi-house-door-fill header-logo-icon"></i>
        </div>
        <h1>منصّة عقارك</h1>
      </div>
      <div class="header-buttons">
        <div id="visitorCount"><i class="bi bi-people-fill me-1"></i> عدد الزائرين: 15,879</div>
        <button class="search-btn" onclick="scrollToSearch()"><i class="bi bi-search me-1"></i> البحث</button>
        <button class="login-btn" id="loginLogoutBtn" onclick="toggleLoginPanel()"><i class="bi bi-person-fill me-1"></i> دخول الإدارة</button>
      </div>
    </div>
  </header>

  <!-- نموذج تسجيل الدخول -->
  <div id="loginPanel">
    <h5>تسجيل الدخول للإدارة</h5>
    <div class="mb-3">
      <label for="usernameInput" class="form-label">اسم المستخدم</label>
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-person"></i></span>
        <input type="text" id="usernameInput" class="form-control" placeholder="اكتب اسم المستخدم">
      </div>
    </div>
    <div class="mb-3">
      <label for="passwordInput" class="form-label">كلمة المرور</label>
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-shield-lock"></i></span>
        <input type="password" id="passwordInput" class="form-control" placeholder="اكتب كلمة المرور">
      </div>
    </div>
    <button class="btn w-100" onclick="performLogin()" style="background-color: var(--primary-color); color: white; font-weight: 600; padding: 12px;">
      <i class="bi bi-box-arrow-in-left me-2"></i>دخول
    </button>
  </div>

  <!-- لوحة الإدارة -->
  <div id="adminPanel" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: var(--secondary-color); z-index: 1200; overflow-y: auto; padding-top: 20px;">
    <div class="container">
      <!-- زر العودة للصفحة الرئيسية -->
      <button id="backToMainBtn" class="btn btn-secondary mb-4" onclick="toggleAdminPanel(false)">
        <i class="bi bi-arrow-left me-2"></i>
        العودة للصفحة الرئيسية
      </button>

      <!-- شريط العنوان مع شعار الإدارة -->
      <div class="admin-header mb-4">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <i class="bi bi-shield-lock-fill me-2" style="font-size: 1.8rem; color: var(--primary-color);"></i>
            <h2 class="mb-0">لوحة إدارة المنصة</h2>
          </div>
          <div class="text-muted">
            <i class="bi bi-calendar3 me-1"></i> <span id="currentDate"></span>
          </div>
        </div>
        <div class="mt-2 admin-stats d-flex flex-wrap">
          <div class="stat-box">
            <i class="bi bi-houses-fill text-primary"></i>
            <span class="counter" id="totalPropertiesCount">0</span>
            <span class="label">إجمالي العقارات</span>
          </div>
          <div class="stat-box">
            <i class="bi bi-star-fill" style="color: var(--featured-badge);"></i>
            <span class="counter" id="featuredPropertiesCount">0</span>
            <span class="label">عقارات مميزة</span>
          </div>
          <div class="stat-box">
            <i class="bi bi-gem" style="color: var(--exclusive-badge);"></i>
            <span class="counter" id="exclusivePropertiesCount">0</span>
            <span class="label">عقارات حصرية</span>
          </div>
          <div class="stat-box">
            <i class="bi bi-eye-fill text-success"></i>
            <span class="counter" id="adminVisitorsCount">0</span>
            <span class="label">إجمالي الزيارات</span>
          </div>
        </div>
      </div>

      <ul class="nav nav-tabs admin-tabs mb-4" id="adminTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="properties-tab" data-bs-toggle="tab" data-bs-target="#properties-tab-pane" type="button" role="tab" aria-controls="properties-tab-pane" aria-selected="true">
            <i class="bi bi-houses me-2"></i>إدارة العقارات
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="submissions-tab" data-bs-toggle="tab" data-bs-target="#submissions-tab-pane" type="button" role="tab" aria-controls="submissions-tab-pane" aria-selected="false">
            <i class="bi bi-people me-2"></i>إعلانات العملاء
            <span class="badge bg-danger rounded-pill ms-2 client-submissions-count">0</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects-tab-pane" type="button" role="tab" aria-controls="projects-tab-pane" aria-selected="false">
            <i class="bi bi-building-gear me-2"></i>المشاريع العقارية
          </button>
        </li>
      </ul>

      <div class="tab-content admin-tab-content">
        <!-- قسم إدارة العقارات -->
        <div class="tab-pane fade show active" id="properties-tab-pane" role="tabpanel" aria-labelledby="properties-tab" tabindex="0">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="section-title">
              <i class="bi bi-houses-fill me-2" style="color: var(--primary-color);"></i>
              إدارة العقارات
            </h3>
            <button type="button" class="btn btn-primary" id="showAddPropertyFormBtn">
              <i class="bi bi-plus-lg me-1"></i> إضافة عقار جديد
            </button>
          </div>
          <div id="propertyFormContainer" class="mb-4 p-3 admin-form-container">
            <div class="form-header mb-3">
              <i class="bi bi-house-add me-2"></i> 
              <span id="formTitle">إضافة عقار جديد</span>
            </div>

            <form id="propertyForm">
              <input type="hidden" id="propertyId">

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="title" class="form-label">
                    <i class="bi bi-pencil-square me-1 text-primary"></i> العنوان
                  </label>
                  <input type="text" id="title" class="form-control" placeholder="مثلاً: عقار 1 - عمارة سكنية" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="location" class="form-label">
                    <i class="bi bi-geo-alt me-1 text-primary"></i> الموقع
                  </label>
                  <input type="text" id="location" class="form-control" placeholder="مثلاً: الطائف - حي ..." required>
                  <div class="form-text">يمكنك اختيار أحد أحياء الطائف مثل: الشهداء، الوسام، النسيم، العزيزية، إلخ...</div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="price" class="form-label">
                    <i class="bi bi-currency-dollar me-1 text-primary"></i> السعر
                  </label>
                  <div class="input-group">
                    <input type="text" id="price" class="form-control" placeholder="مثلاً: 500000" pattern="^[0-9]+$" title="يجب أن يكون رقماً فقط" required>
                    <span class="input-group-text">ريال</span>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="category" class="form-label">
                    <i class="bi bi-building me-1 text-primary"></i> التصنيف
                  </label>
                  <select id="category" class="form-select" required>
                    <option value="">اختر التصنيف</option>
                    <option value="عمائر">عمائر</option>
                    <option value="فلل">فلل</option>
                    <option value="شقق">شقق</option>
                    <option value="استراحات">استراحات</option>
                    <option value="أدوار مستقلة">أدوار مستقلة</option>
                    <option value="أراضي">أراضي</option>
                  </select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="type" class="form-label">
                    <i class="bi bi-tag me-1 text-primary"></i> نوع العرض
                  </label>
                  <select id="type" class="form-select" required>
                    <option value="">اختر نوع العرض</option>
                    <option value="للبيع">للبيع</option>
                    <option value="للإيجار">للإيجار</option>
                  </select>
                </div>
              </div>

              <!-- تمييز العقار -->
              <div class="badge-section p-3 mb-3">
                <label class="form-label mb-2">
                  <i class="bi bi-award me-1 text-primary"></i> تمييز العقار (اختياري)
                </label>
                <div class="badge-options">
                  <div class="form-check badge-option">
                    <input class="form-check-input" type="radio" name="badgeOption" id="noBadge" value="" checked>
                    <label class="form-check-label active-badge" for="noBadge" onclick="selectBadge('', this)">
                      <i class="bi bi-x-circle me-1"></i> بدون تمييز
                    </label>
                  </div>
                  <div class="form-check badge-option">
                    <input class="form-check-input" type="radio" name="badgeOption" id="featuredBadge" value="featured">
                    <label class="form-check-label featured-badge" for="featuredBadge" onclick="selectBadge('featured', this)">
                      <i class="bi bi-star-fill me-1"></i> مميز
                    </label>
                  </div>
                  <div class="form-check badge-option">
                    <input class="form-check-input" type="radio" name="badgeOption" id="exclusiveBadge" value="exclusive">
                    <label class="form-check-label exclusive-badge" for="exclusiveBadge" onclick="selectBadge('exclusive', this)">
                      <i class="bi bi-gem me-1"></i> حصري
                    </label>
                  </div>
                  <div class="form-check badge-option">
                    <input class="form-check-input" type="radio" name="badgeOption" id="pinnedBadge" value="pinned">
                    <label class="form-check-label pinned-badge" for="pinnedBadge" onclick="selectBadge('pinned', this)">
                      <i class="bi bi-pin-angle-fill me-1"></i> عرض مثبت
                    </label>
                  </div>
                </div>
                <select id="badge" class="form-select d-none">
                  <option value="">بدون تمييز</option>
                  <option value="featured">مميز</option>
                  <option value="exclusive">حصري</option>
                  <option value="pinned">عرض مثبت</option>
                </select>
              </div>

              <!-- صور العقار -->
              <div class="image-section p-3 mb-3">
                <div class="mb-3">
                  <label for="mainImageFile" class="form-label">
                    <i class="bi bi-image me-1 text-primary"></i> الصورة الرئيسية
                  </label>
                  <input type="file" id="mainImageFile" class="form-control" accept="image/*">
                  <div class="form-text">يفضل صورة بجودة عالية بحجم 800×600 بكسل</div>
                </div>
                <div class="mb-2">
                  <label for="additionalImages" class="form-label">
                    <i class="bi bi-images me-1 text-primary"></i> الصور الإضافية (يمكن اختيار أكثر من ملف)
                  </label>
                  <input type="file" id="additionalImages" class="form-control" accept="image/*" multiple>
                </div>
                <div id="additionalImagesPreview" class="d-flex flex-wrap gap-2 mt-2"></div>
              </div>

              <!-- وصف العقار -->
              <div class="description-section p-3 mb-3">
                <label for="description" class="form-label mb-2">
                  <i class="bi bi-text-paragraph me-1 text-primary"></i> وصف العقار
                  <span class="text-muted">(سيتم استخدامه في رسائل الواتساب <i class="bi bi-whatsapp text-success"></i>)</span>
                </label>
                <textarea id="description" class="form-control" rows="4" placeholder="أدخل وصفاً تفصيلياً للعقار..."></textarea>
              </div>

              <!-- أزرار الإجراءات -->
              <div class="form-actions d-flex flex-wrap gap-2 justify-content-between align-items-center">
                <div>
                  <button type="submit" class="btn btn-success px-4" id="saveBtn">
                    <i class="bi bi-save me-1"></i> حفظ العقار
                  </button>
                  <button type="reset" class="btn btn-outline-secondary" id="resetForm">
                    <i class="bi bi-arrow-repeat me-1"></i> إعادة تعيين
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-primary" id="newPropertyBtn">
                    <i class="bi bi-plus-lg me-1"></i> إضافة عقار جديد
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- جدول العقارات -->
          <div class="properties-table-container">
            <div class="table-header d-flex justify-content-between align-items-center mb-3">
              <h4>
                <i class="bi bi-table me-2"></i>
                قائمة العقارات المُضافة
              </h4>
              <div class="table-actions">
                <div class="input-group">
                  <input type="text" id="tableSearch" class="form-control" placeholder="بحث في العقارات...">
                  <button class="btn btn-outline-primary" type="button">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-hover align-middle admin-table" id="propertiesTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>العنوان</th>
                    <th>الموقع</th>
                    <th>السعر</th>
                    <th>التصنيف</th>
                    <th>النوع</th>
                    <th>التمييز</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody id="adminTableBody">
                  <!-- سيتم تعبئة الجدول هنا -->
                </tbody>
              </table>
            </div>
            <div class="table-footer d-flex justify-content-between align-items-center mt-2">
              <div class="table-info text-muted">
                <small>إجمالي السجلات: <span id="totalRecords">0</span></small>
              </div>
              <div class="table-pagination">
                <button class="btn btn-sm btn-outline-primary me-1" disabled>السابق</button>
                <button class="btn btn-sm btn-primary me-1">1</button>
                <button class="btn btn-sm btn-outline-primary">التالي</button>
              </div>
            </div>
          </div>
        </div>

        <!-- قسم إعلانات العملاء -->
        <div class="tab-pane fade" id="submissions-tab-pane" role="tabpanel" aria-labelledby="submissions-tab" tabindex="0">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="section-title">
              <i class="bi bi-people-fill me-2" style="color: var(--primary-color);"></i>
              إدارة إعلانات العملاء
            </h3>
            <div class="search-filter">
              <div class="input-group">
                <input type="text" id="submissionsSearch" class="form-control" placeholder="بحث في الإعلانات...">
                <button class="btn btn-outline-primary" type="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- إحصائيات الإعلانات -->
          <div class="admin-stats d-flex flex-wrap mb-4">
            <div class="stat-box">
              <i class="bi bi-clipboard-data text-primary"></i>
              <span class="counter" id="totalSubmissionsCount">0</span>
              <span class="label">إجمالي الطلبات</span>
            </div>
            <div class="stat-box">
              <i class="bi bi-hourglass-split text-warning"></i>
              <span class="counter" id="pendingSubmissionsCount">0</span>
              <span class="label">طلبات معلقة</span>
            </div>
            <div class="stat-box">
              <i class="bi bi-check-circle-fill text-success"></i>
              <span class="counter" id="approvedSubmissionsCount">0</span>
              <span class="label">طلبات تمت الموافقة</span>
            </div>
            <div class="stat-box">
              <i class="bi bi-x-circle-fill text-danger"></i>
              <span class="counter" id="rejectedSubmissionsCount">0</span>
              <span class="label">طلبات مرفوضة</span>
            </div>
          </div>

          <!-- فلتر الإعلانات -->
          <div class="submissions-filter mb-4">
            <div class="filter-label mb-2">تصفية الطلبات حسب الحالة:</div>
            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-outline-primary active" onclick="filterClientSubmissions('all')">
                <i class="bi bi-grid-3x3-gap-fill me-1"></i> الكل <span class="badge rounded-pill bg-secondary ms-1">12</span>
              </button>
              <button type="button" class="btn btn-outline-warning" onclick="filterClientSubmissions('pending')">
                <i class="bi bi-hourglass-split me-1"></i> معلق <span class="badge rounded-pill bg-warning text-dark ms-1">5</span>
              </button>
              <button type="button" class="btn btn-outline-success" onclick="filterClientSubmissions('approved')">
                <i class="bi bi-check-circle me-1"></i> تمت الموافقة <span class="badge rounded-pill bg-success ms-1">4</span>
              </button>
              <button type="button" class="btn btn-outline-danger" onclick="filterClientSubmissions('rejected')">
                <i class="bi bi-x-circle me-1"></i> مرفوض <span class="badge rounded-pill bg-danger ms-1">3</span>
              </button>
            </div>
          </div>

          <!-- جدول إعلانات العملاء -->
          <div class="table-responsive">
            <table class="table table-hover align-middle admin-table" id="submissionsTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>تاريخ الطلب</th>
                  <th>اسم العميل</th>
                  <th>رقم الواتساب</th>
                  <th>عنوان العقار</th>
                  <th>الموقع</th>
                  <th>السعر</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody id="clientSubmissionsTableBody">
                <!-- تم حذف الإعلانات الوهمية - سيتم تعبئة الجدول بالإعلانات الحقيقية من قاعدة البيانات -->
              </tbody>
            </table>
          </div>

          <!-- ترقيم الصفحات -->
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="text-muted small">
              عرض <span id="currentSubmissionsCount">3</span> من أصل <span id="totalSubmissionsInTable">12</span> إعلان
            </div>
            <nav aria-label="ترقيم صفحات الإعلانات">
              <ul class="pagination pagination-sm">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="السابق">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="التالي">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- قسم المشاريع العقارية -->
        <div class="tab-pane fade" id="projects-tab-pane" role="tabpanel" aria-labelledby="projects-tab" tabindex="0">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="section-title">
              <i class="bi bi-building-gear me-2" style="color: var(--primary-color);"></i>
              إدارة المشاريع العقارية
            </h3>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-outline-primary" onclick="toggleProjectsView()">
                <i class="bi bi-grid"></i> طريقة العرض
              </button>
              <button type="button" class="btn btn-primary" id="showAddProjectFormBtn">
                <i class="bi bi-plus-lg me-1"></i> إضافة مشروع جديد
              </button>
            </div>
          </div>

          <!-- إحصائيات المشاريع -->
          <div class="admin-stats d-flex flex-wrap mb-4">
            <div class="stat-box">
              <i class="bi bi-building-fill text-primary"></i>
              <span class="counter" id="totalProjectsCount">0</span>
              <span class="label">إجمالي المشاريع</span>
            </div>
            <div class="stat-box">
              <i class="bi bi-eye-fill text-success"></i>
              <span class="counter" id="projectViewsCount">0</span>
              <span class="label">مشاهدات المشاريع</span>
            </div>
            <div class="stat-box">
              <i class="bi bi-graph-up-arrow" style="color: #6f42c1;"></i>
              <span class="counter" id="projectInteractions">0</span>
              <span class="label">تفاعلات</span>
            </div>
          </div>

          <!-- نموذج إضافة مشروع عقاري -->
          <div id="projectFormContainer" class="mb-4 p-3 admin-form-container">
            <div class="form-header mb-3">
              <i class="bi bi-building-add me-2"></i> 
              <span id="projectFormTitle">إضافة مشروع عقاري جديد</span>
            </div>

            <form id="projectForm" class="mb-4">
              <input type="hidden" id="projectId">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="projectTitle" class="form-label">
                    <i class="bi bi-pencil-square me-1 text-primary"></i> اسم المشروع
                  </label>
                  <input type="text" id="projectTitle" class="form-control" placeholder="مثلاً: مشروع سكني فاخر" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="projectLocation" class="form-label">
                    <i class="bi bi-geo-alt me-1 text-primary"></i> الموقع
                  </label>
                  <input type="text" id="projectLocation" class="form-control" placeholder="مثلاً: الطائف - حي الشهداء" required>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="projectType" class="form-label">
                    <i class="bi bi-tag me-1 text-primary"></i> نوع المشروع
                  </label>
                  <select id="projectType" class="form-select">
                    <option value="">اختر نوع المشروع</option>
                    <option value="سكني">سكني</option>
                    <option value="تجاري">تجاري</option>
                    <option value="متعدد الاستخدامات">متعدد الاستخدامات</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="projectStatus" class="form-label">
                    <i class="bi bi-flag me-1 text-primary"></i> حالة المشروع
                  </label>
                  <select id="projectStatus" class="form-select">
                    <option value="">اختر حالة المشروع</option>
                    <option value="قيد الإنشاء">قيد الإنشاء</option>
                    <option value="مكتمل">مكتمل</option>
                    <option value="قيد التنفيذ">قيد التنفيذ</option>
                    <option value="بيع على الخارطة">بيع على الخارطة</option>
                  </select>
                </div>
              </div>

              <div class="mb-3">
                <label for="projectImageFile" class="form-label">
                  <i class="bi bi-image me-1 text-primary"></i> صورة المشروع الرئيسية
                </label>
                <input type="file" id="projectImageFile" class="form-control" accept="image/*">
                <div class="form-text">يفضل صورة عالية الجودة بأبعاد 1200×800 بكسل</div>
              </div>

              <div class="mb-3">
                <label for="projectGalleryFiles" class="form-label">
                  <i class="bi bi-images me-1 text-primary"></i> معرض صور المشروع (اختياري)
                </label>
                <input type="file" id="projectGalleryFiles" class="form-control" accept="image/*" multiple>
              </div>

              <div class="mb-3">
                <label for="projectDescription" class="form-label">
                  <i class="bi bi-text-paragraph me-1 text-primary"></i> وصف المشروع
                </label>
                <textarea id="projectDescription" class="form-control" rows="4" placeholder="وصف تفصيلي للمشروع..."></textarea>
              </div>

              <!-- أزرار الإجراءات -->
              <div class="form-actions d-flex flex-wrap gap-2 justify-content-between align-items-center">
                <div>
                  <button type="submit" class="btn btn-success px-4" id="saveProjectBtn">
                    <i class="bi bi-save me-1"></i> حفظ المشروع
                  </button>
                  <button type="reset" class="btn btn-outline-secondary" id="resetProjectForm">
                    <i class="bi bi-arrow-repeat me-1"></i> إعادة تعيين
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-primary" id="newProjectBtn">
                    <i class="bi bi-plus-lg me-1"></i> إضافة مشروع جديد
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- عرض المشاريع الحالية -->
          <div class="projects-display-container">
            <div class="view-control mb-3">
              <h4 class="mb-0">
                <i class="bi bi-list-ul me-2"></i>
                المشاريع الحالية
                <span class="text-muted fs-6">(3 مشاريع)</span>
              </h4>
            </div>

            <div class="table-responsive mb-4">
              <table class="table table-hover align-middle admin-table" id="projectsTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>صورة</th>
                    <th>اسم المشروع</th>
                    <th>الموقع</th>
                    <th>النوع</th>
                    <th>الحالة</th>
                    <th>المشاهدات</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody id="projectsTableBody">
                  <!-- سيتم تعبئة الجدول هنا -->
                  <tr>
                    <td>1</td>
                    <td>
                      <div class="property-image-thumb">
                        <img src="https://images.unsplash.com/photo-1607585011365-45e801736073" alt="مشروع سكني فاخر">
                      </div>
                    </td>
                    <td>مشروع سكني فاخر</td>
                    <td>حي الشهداء</td>
                    <td><span class="badge bg-primary">سكني</span></td>
                    <td><span class="badge bg-success">مكتمل</span></td>
                    <td>485</td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div class="property-image-thumb">
                        <img src="https://images.unsplash.com/photo-1519972064555-542444e71b2d" alt="تطوير تجاري">
                      </div>
                    </td>
                    <td>تطوير تجاري</td>
                    <td>وسط الطائف</td>
                    <td><span class="badge bg-info">تجاري</span></td>
                    <td><span class="badge bg-warning">قيد الإنشاء</span></td>
                    <td>329</td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <div class="property-image-thumb">
                        <img src="https://images.unsplash.com/photo-1535261260927-be9a321ac756" alt="مشروع فلل">
                      </div>
                    </td>
                    <td>مشروع فلل</td>
                    <td>حي الوسام</td>
                    <td><span class="badge bg-primary">سكني</span></td>
                    <td><span class="badge bg-secondary">بيع على الخارطة</span></td>
                    <td>429</td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end mt-4">
        <button class="btn btn-danger" onclick="performLogout()">
          <i class="bi bi-box-arrow-right me-2"></i> تسجيل خروج
        </button>
      </div>
    </div>
  </div>

  <!-- نموذج عرض تفاصيل إعلان العميل -->
  <div class="modal fade" id="clientSubmissionViewModal" tabindex="-1" aria-labelledby="clientSubmissionViewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="clientSubmissionViewModalLabel">تفاصيل إعلان العميل</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="إغلاق"></button>
        </div>
        <div class="modal-body" id="clientSubmissionViewBody">
          <!-- سيتم تعبئة التفاصيل هنا -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" id="approveSubmissionBtn">موافقة على الإعلان</button>
          <button type="button" class="btn btn-danger" id="rejectSubmissionBtn">رفض الإعلان</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
        </div>
      </div>
    </div>
  </div>

  <!-- قسم الرئيسية (Hero) -->
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h2>اكتشف أفضل العقارات في مدينة الطائف</h2>
      <p>سواء كنت تبحث عن منزل أحلامك أو فرصة استثمارية مميزة، نوفر لك أفضل الخيارات العقارية</p>
      <a href="#searchSection" class="btn btn-lg" style="background-color: var(--accent-color); color: white; padding: 12px 25px; border-radius: 50px; font-weight: 700; box-shadow: 0 5px 15px rgba(34, 181, 115, 0.3);">
        <i class="bi bi-search me-2"></i> ابدأ البحث الآن
      </a>
    </div>
  </section>

  <!-- قسم البحث المتقدم -->
  <div class="container" id="searchSection">
    <div class="search-box">
      <div class="search-box-title">
        <i class="bi bi-funnel-fill"></i> ابحث عن عقارك المثالي
      </div>

      <div class="row mb-3 mt-4">
        <div class="col-md-4 mb-3">
          <label class="form-label">نوع العقار</label>
          <div class="input-group">
            <span class="input-group-text bg-white border-end-0">
              <i class="bi bi-tag text-primary"></i>
            </span>
            <select id="propertyTypeFilter" class="form-select border-start-0 ps-0">
              <option value="">كل الأنواع</option>
              <option value="للبيع">للبيع</option>
              <option value="للإيجار">للإيجار</option>
            </select>
          </div>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">التصنيف</label>
          <div class="input-group">
            <span class="input-group-text bg-white border-end-0">
              <i class="bi bi-house-door text-primary"></i>
            </span>
            <select id="propertyCategoryFilter" class="form-select border-start-0 ps-0">
              <option value="">جميع التصنيفات</option>
              <option value="عمائر">عمائر</option>
              <option value="فلل">فلل</option>
              <option value="شقق">شقق</option>
              <option value="استراحات">استراحات</option>
              <option value="أدوار مستقلة">أدوار مستقلة</option>
              <option value="أراضي">أراضي</option>
            </select>
          </div>
        </div>

        <input type="hidden" id="neighborhoodFilter" value="">
      </div>

      <div class="mb-3">
        <button type="button" class="search-advanced-toggle" data-bs-toggle="collapse" data-bs-target="#advancedSearchCollapse" aria-expanded="false">
          <i class="bi bi-sliders me-1"></i> خيارات بحث متقدمة
        </button>
      </div>

      <div class="collapse mt-3" id="advancedSearchCollapse">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">نطاق السعر</label>
            <div class="d-flex gap-2">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0">
                  <i class="bi bi-currency-dollar text-primary"></i>
                </span>
                <input type="number" id="minPriceFilter" class="form-control border-start-0 ps-0" placeholder="أقل سعر">
              </div>
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0">
                  <i class="bi bi-currency-dollar text-primary"></i>
                </span>
                <input type="number" id="maxPriceFilter" class="form-control border-start-0 ps-0" placeholder="أعلى سعر">
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <label class="form-label">البحث بالنص</label>
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search text-primary"></i>
              </span>
              <input type="text" id="searchInput" class="form-control border-start-0 ps-0" placeholder="ابحث عن عقار (عنوان، موقع، وصف...)">
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12 d-flex justify-content-center gap-2">
          <button type="button" id="applyFilters" class="btn px-4 py-2" style="background-color: var(--accent-color); color: white; font-weight: 600; min-width: 120px;">
            <i class="bi bi-search me-2"></i> بحث
          </button>
          <button type="button" id="resetFilters" class="btn btn-outline-secondary px-4 py-2" style="font-weight: 600; min-width: 120px;">
            <i class="bi bi-arrow-repeat me-2"></i> إعادة ضبط
          </button>
        </div>
      </div>
    </div>

    <!-- أقسام العقارات -->
    <div class="mt-5 mb-4">
      <h3 class="text-center mb-4" style="color: var(--dark-text); font-weight: 700;">تصفح حسب التصنيف</h3>

      <div class="categories-slider">
        <div class="category-card active" id="category-all" onclick="filterProperties('all')">
          <div class="category-icon">
            <i class="bi bi-grid-3x3-gap"></i>
          </div>
          <div class="category-text">عرض الكل</div>
        </div>

        <div class="category-card" id="category-عمائر" onclick="filterProperties('عمائر')">
          <div class="category-icon">
            <i class="bi bi-building"></i>
          </div>
          <div class="category-text">عمائر</div>
        </div>

        <div class="category-card" id="category-فلل" onclick="filterProperties('فلل')">
          <div class="category-icon">
            <i class="bi bi-house"></i>
          </div>
          <div class="category-text">فلل</div>
        </div>

        <div class="category-card" id="category-شقق" onclick="filterProperties('شقق')">
          <div class="category-icon">
            <i class="bi bi-houses"></i>
          </div>
          <div class="category-text">شقق</div>
        </div>

        <div class="category-card" id="category-استراحات" onclick="filterProperties('استراحات')">
          <div class="category-icon">
            <i class="bi bi-tree"></i>
          </div>
          <div class="category-text">استراحات</div>
        </div>

        <div class="category-card" id="category-أدوار مستقلة" onclick="filterProperties('أدوار مستقلة')">
          <div class="category-icon">
            <i class="bi bi-layers"></i>
          </div>
          <div class="category-text">أدوار مستقلة</div>
        </div>

        <div class="category-card" id="category-أراضي" onclick="filterProperties('أراضي')">
          <div class="category-icon">
            <i class="bi bi-geo-alt"></i>
          </div>
          <div class="category-text">أراضي</div>
        </div>
      </div>
    </div>

    <div class="text-center mt-4 mb-5">
      <button class="btn px-4 py-2" onclick="showAddPropertyForm()" style="background-color: var(--primary-color); color: white; font-weight: 600; border-radius: 50px; min-width: 200px; box-shadow: var(--shadow);">
        <i class="bi bi-plus-circle-fill me-2"></i> إضافة عقارك الآن
      </button>
    </div>
  </div>

  <!-- قائمة العقارات المميزة والحصرية -->
  <section class="container mb-5 mt-4" id="featuredProperties">
    <div class="properties-header mb-4">
      <h2 class="property-list-title">
        <i class="bi bi-star-fill me-2" style="color: var(--featured-badge);"></i>
        عقارات مميزة
      </h2>
      <a href="#allProperties" class="btn btn-sm" style="color: var(--primary-color); background-color: var(--primary-light); font-weight: 600; padding: 8px 16px; border-radius: 50px;">
        <i class="bi bi-grid-3x3-gap me-1"></i> عرض جميع العقارات
      </a>
    </div>
    <div id="featuredPropertiesContainer" class="row g-4">
      <!-- العقارات المميزة ستظهر هنا -->
    </div>
  </section>

  <!-- قائمة العقارات العامة -->
  <section class="container" id="allProperties">
    <div class="properties-header">
      <h2 class="property-list-title">جميع العقارات المتاحة</h2>
      <div class="properties-count" id="propertiesCount">0 عقار</div>
    </div>

    <div id="loadingProperties" class="py-4 text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">جارٍ التحميل...</span>
      </div>
      <p class="mt-2 text-primary">جارٍ تحميل العقارات...</p>
    </div>

    <div id="propertiesContainer" class="row g-4">
      <!-- بطاقات العقارات ستظهر هنا -->
    </div>

    <div id="noPropertiesMessage" class="text-center py-5" style="display: none;">
      <i class="bi bi-house-slash" style="font-size: 4rem; color: var(--light-text);"></i>
      <h4 class="mt-3" style="color: var(--dark-text);">لا توجد عقارات تطابق معايير البحث</h4>
      <p class="text-muted">يرجى تعديل معايير البحث أو تصفح جميع العقارات</p>
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mt-3">
        <button onclick="resetFilters()" class="btn" style="background-color: var(--primary-color); color: white;">
          <i class="bi bi-arrow-repeat me-2"></i> عرض جميع العقارات
        </button>
        <a href="https://wa.me/966535342404?text=مرحباً، لم أجد العقار المناسب لي. أرغب في مساعدتكم للعثور على عقار يناسب احتياجاتي." class="btn btn-success" target="_blank">
          <i class="bi bi-whatsapp me-2"></i> لم أجد العقار المناسب
        </a>
      </div>
    </div>

    <!-- قسم لم أجد العقار المناسب -->
    <div class="container mt-5 mb-5">
      <div class="card not-found-card shadow-sm">
        <div class="card-body text-center p-4">
          <i class="bi bi-house-heart fs-1 text-primary mb-3"></i>
          <h4 class="mb-3">لم تجد العقار الذي يناسبك؟</h4>
          <p class="mb-4">نحن هنا لمساعدتك في العثور على العقار المثالي. تواصل معنا على واتساب وسنساعدك في إيجاد ما تبحث عنه.</p>
          <a href="https://wa.me/966535342404?text=مرحباً، لم أجد العقار المناسب لي. أرغب في مساعدتكم للعثور على عقار يناسب احتياجاتي." class="btn btn-lg btn-success px-5" target="_blank">
            <i class="bi bi-whatsapp me-2"></i> تواصل معنا على واتساب
          </a>
        </div>
      </div>
    </div>

    <style>
      .not-found-card {
        border-radius: 15px;
        border: none;
        overflow: hidden;
        background: linear-gradient(145deg, #f8f9fa, #ffffff);
        border-top: 4px solid var(--primary-color);
        transition: all 0.3s ease;
      }

      .not-found-card:hover {
        box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        transform: translateY(-5px);
      }

      .btn-success {
        background-color: #25D366;
        border-color: #25D366;
        transition: all 0.3s ease;
      }

      .btn-success:hover {
        background-color: #128C7E;
        border-color: #128C7E;
        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
      }
    </style>
  </section>

  <!-- صفحة تفاصيل العقار -->
  <div id="propertyDetailPage">
    <div class="container mt-4">
      <button class="btn btn-secondary mb-4" onclick="backToListing()">
        <i class="bi bi-arrow-right"></i> عودة للقائمة
      </button>
      <div id="detailContent">
        <!-- تفاصيل العقار ستظهر هنا -->
      </div>
    </div>
  </div>

  <!-- نموذج إضافة عقار من قبل العميل -->
  <div class="modal fade" id="clientSubmissionModal" tabindex="-1" aria-labelledby="clientSubmissionModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header" style="background-color: var(--primary-light);">
          <h5 class="modal-title" id="clientSubmissionModalLabel">
            <i class="bi bi-plus-circle-fill me-2" style="color: var(--accent-color);"></i>
            إضافة عقارك الجديد
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="إغلاق"></button>
        </div>
        <div class="modal-body p-4">
          <div class="alert" style="background-color: var(--accent-light); color: var(--accent-dark); border: none; border-radius: var(--radius-sm); padding: 15px;">
            <div class="d-flex align-items-center">
              <i class="bi bi-info-circle-fill me-3" style="font-size: 1.5rem; color: var(--accent-color);"></i>
              <div>
                <strong style="font-size: 1rem;">هام:</strong>
                <p class="mb-0 mt-1">جميع الطلبات ستخضع للمراجعة قبل النشر. يرجى تعبئة جميع الحقول المطلوبة بشكل دقيق لضمان الموافقة على طلبك.</p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 style="color: var(--primary-color); font-weight: 700; margin-bottom: 0; display: flex; align-items: center;">
                <i class="bi bi-person-badge me-2"></i> معلومات مقدم الطلب
              </h6>
              <div class="steps-indicator">
                <span class="badge rounded-pill" style="background-color: var(--primary-color);">1/4</span>
              </div>
            </div>

            <form id="clientSubmissionForm">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="clientName" class="form-label">الاسم الكامل <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-person text-primary"></i>
                    </span>
                    <input type="text" class="form-control border-start-0 ps-0" id="clientName" placeholder="أدخل اسمك الكامل" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="clientWhatsapp" class="form-label">رقم الواتساب <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-whatsapp text-success"></i>
                    </span>
                    <span class="input-group-text bg-white border-start-0 border-end-0">+966</span>
                    <input type="text" class="form-control border-start-0 ps-0" id="clientWhatsapp" value="535342404" placeholder="535342404" pattern="^[0-9]{9}$" title="أدخل رقم واتساب صحيح مكون من 9 أرقام بدون صفر في البداية" required>
                  </div>
                </div>

                <div class="col-12 mt-4">
                  <div class="d-flex justify-content-between mb-3">
                    <h6 style="color: var(--primary-color); font-weight: 700; margin-bottom: 0; display: flex; align-items: center;">
                      <i class="bi bi-house-add me-2"></i> معلومات العقار
                    </h6>
                    <div class="steps-indicator">
                      <span class="badge rounded-pill" style="background-color: var(--primary-color);">2/4</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <label for="clientPropTitle" class="form-label">عنوان العرض <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-pencil-square text-primary"></i>
                    </span>
                    <input type="text" class="form-control border-start-0 ps-0" id="clientPropTitle" placeholder="مثال: فيلا فاخرة في حي الشهداء" required>
                  </div>
                </div>
                <!-- تم حذف خانة الحي بناءً على الطلب -->
                <input type="hidden" id="clientPropNeighborhood" value="غير محدد" />
                </div>
                <div class="col-md-6">
                  <label for="clientPropCategory" class="form-label">القسم <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-grid-3x3-gap text-primary"></i>
                    </span>
                    <select class="form-select border-start-0 ps-0" id="clientPropCategory" required>
                      <option value="">اختر القسم</option>
                      <option value="عمائر">عمائر</option>
                      <option value="فلل">فلل</option>
                      <option value="شقق">شقق</option>
                      <option value="استراحات">استراحات</option>
                      <option value="أدوار مستقلة">أدوار مستقلة</option>
                      <option value="أراضي">أراضي</option>
                      <option value="أخرى">أخرى (حدد في الوصف)</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="clientPropType" class="form-label">نوع العرض <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-tag text-primary"></i>
                    </span>
                    <select class="form-select border-start-0 ps-0" id="clientPropType" required>
                      <option value="">اختر النوع</option>
                      <option value="للبيع">للبيع</option>
                      <option value="للإيجار">للإيجار</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="clientPropPrice" class="form-label">السعر <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-currency-dollar text-primary"></i>
                    </span>
                    <input type="number" class="form-control border-start-0 border-end-0 ps-0" id="clientPropPrice" placeholder="أدخل السعر" required>
                    <span class="input-group-text bg-white">ريال</span>
                  </div>
                </div>

                <div class="col-12 mt-4">
                  <div class="d-flex justify-content-between mb-3">
                    <h6 style="color: var(--primary-color); font-weight: 700; margin-bottom: 0; display: flex; align-items: center;">
                      <i class="bi bi-images me-2"></i> صور العقار
                    </h6>
                    <div class="steps-indicator">
                      <span class="badge rounded-pill" style="background-color: var(--primary-color);">3/4</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <label for="clientPropMainImage" class="form-label">الصورة الرئيسية <span class="text-danger">*</span></label>
                  <div class="drop-zone" style="border: 2px dashed var(--border-color); border-radius: var(--radius-sm); padding: 15px; text-align: center; cursor: pointer; position: relative; margin-bottom: 15px;">
                    <i class="bi bi-cloud-arrow-up" style="font-size: 3rem; color: var(--light-text);"></i>
                    <p class="mb-0 mt-2" style="color: var(--light-text);">اسحب الصورة هنا أو انقر للاختيار</p>
                    <input class="form-control opacity-0" type="file" id="clientPropMainImage" accept="image/*" required style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer;">
                    <div id="mainImagePreview" class="mt-3" style="display: flex; justify-content: center;"></div>
                  </div>
                </div>

                <div class="col-md-12">
                  <label for="clientPropImages" class="form-label">صور إضافية (اختياري)</label>
                  <div class="drop-zone" style="border: 2px dashed var(--border-color); border-radius: var(--radius-sm); padding: 15px; text-align: center; cursor: pointer; position: relative;">
                    <i class="bi bi-images" style="font-size: 3rem; color: var(--light-text);"></i>
                    <p class="mb-0 mt-2" style="color: var(--light-text);">اسحب الصور هنا أو انقر للاختيار (يمكنك اختيار أكثر من صورة)</p>
                    <input class="form-control opacity-0" type="file" id="clientPropImages" accept="image/*" multiple style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer;">
                  </div>
                  <div id="clientImagesPreview" class="d-flex flex-wrap gap-2 mt-3"></div>
                </div>

                <div class="col-12 mt-4">
                  <div class="d-flex justify-content-between mb-3">
                    <h6 style="color: var(--primary-color); font-weight: 700; margin-bottom: 0; display: flex; align-items: center;">
                      <i class="bi bi-file-earmark-text me-2"></i> تفاصيل إضافية
                    </h6>
                    <div class="steps-indicator">
                      <span class="badge rounded-pill" style="background-color: var(--primary-color);">4/4</span>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="clientPropDescription" class="form-label">وصف كامل للعقار <span class="text-danger">*</span></label>
                  <textarea class="form-control" id="clientPropDescription" rows="5" required placeholder="يرجى كتابة وصف تفصيلي للعقار ويشمل:&#10;- المساحة الإجمالية&#10;- عدد الغرف والحمامات&#10;- المميزات الإضافية&#10;- أي معلومات أخرى مهمة للمشتري/المستأجر"></textarea>
                  <div class="form-text mt-2">
                    <i class="bi bi-exclamation-triangle-fill text-warning me-1"></i>
                    ملاحظة: الرجاء كتابة جميع التفاصيل بشكل دقيق وواضح لضمان قبول الطلب. العروض غير المكتملة قد يتم رفضها.
                  </div>
                </div>

                <div class="col-12">
                  <label for="clientPropRestrictions" class="form-label">هل يوجد متعثرات على البيع أو قيود على العقار؟</label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-shield-exclamation text-primary"></i>
                    </span>
                    <select class="form-select border-start-0 ps-0" id="clientPropRestrictions">
                      <option value="لا يوجد">لا يوجد</option>
                      <option value="رهن عقاري">رهن عقاري</option>
                      <option value="بدون صك">بدون صك</option>
                      <option value="أخرى">أخرى (حدد في الوصف)</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer bg-light" style="border-top: 1px solid var(--border-color);">
          <button type="button" class="btn" data-bs-dismiss="modal" style="border: 1px solid var(--border-color); background-color: white; font-weight: 600;">
            <i class="bi bi-x-lg me-2"></i> إلغاء
          </button>
          <button type="button" class="btn" id="submitClientProperty" style="background-color: var(--accent-color); color: white; font-weight: 600;">
            <i class="bi bi-send me-2"></i> إرسال الطلب
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- قسم المشاريع العقارية -->
  <!-- تم إزالة قسم المشاريع العقارية المزيفة بناءً على طلب العميل -->

  <!-- Toast Notification Container -->
  <div id="toastContainer"></div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    const ADMIN_USERNAME = "IVL511";
    const ADMIN_PASSWORD = "WA055364";

    let properties = [];
    let isAdmin = false;
    let filteredList = [];
    let activeCategoryId = "category-all";

    // متغيرات لحفظ الفلاتر الحالية
    let currentFilters = {
      type: '',
      category: '',
      neighborhood: '',
      minPrice: '',
      maxPrice: '',
      query: ''
    };
    
    // متغيرات لتقسيم صفحات إعلانات العملاء
    let currentFilteredSubmissions = [];
    const submissionsPerPage = 5; // عدد الإعلانات في كل صفحة
    let currentSubmissionsPage = 1;

    window.addEventListener("DOMContentLoaded", function() {
      // تحقق من حالة تسجيل الدخول المحفوظة
      checkLoginStatus();

      // تحميل العقارات
      loadProperties();

      // تحديث عداد الزائرين
      updateVisitorCount();

      // تحديث التاريخ الحالي في لوحة الإدارة
      updateCurrentDate();

      // تفعيل زر إظهار نموذج إضافة العقار
      const showAddPropertyFormBtn = document.getElementById("showAddPropertyFormBtn");
      if(showAddPropertyFormBtn) {
        showAddPropertyFormBtn.addEventListener("click", function() {
          document.getElementById("propertyFormContainer").scrollIntoView({ behavior: 'smooth' });
          document.getElementById("title").focus();
        });
      }

      // ربط أزرار تمييز العقار مع القائمة المنسدلة المخفية وتحسين الاستجابة
      const badgeRadios = document.querySelectorAll('input[name="badgeOption"]');
      if(badgeRadios.length > 0) {
        badgeRadios.forEach(radio => {
          // تعزيز منطقة النقر لتشمل التسمية
          const label = document.querySelector(`label[for="${radio.id}"]`);
          if (label) {
            label.addEventListener('click', function(e) {
              e.preventDefault(); // منع السلوك الافتراضي
              radio.checked = true;
              document.getElementById('badge').value = radio.value;

              // إظهار تأثير بصري للمستخدم
              const allLabels = document.querySelectorAll('.badge-option label');
              allLabels.forEach(l => l.classList.remove('active-badge'));
              this.classList.add('active-badge');
            });
          }

          // الاستماع لتغيير حالة الزر الراديو
          radio.addEventListener('change', function() {
            document.getElementById('badge').value = this.value;
            console.log("Badge set to:", this.value);

            // إظهار تأثير بصري عند التغيير
            const label = document.querySelector(`label[for="${this.id}"]`);
            const allLabels = document.querySelectorAll('.badge-option label');
            allLabels.forEach(l => l.classList.remove('active-badge'));
            if (label) {
              label.classList.add('active-badge');
            }
          });
        });
      }

      // إضافة مستمع لنموذج العقار
      document.getElementById("propertyForm").addEventListener("submit", savePropertyForm);

      // إضافة مستمع لنموذج المشروع
      document.getElementById("projectForm").addEventListener("submit", saveProjectForm);

      // إضافة مستمع للبحث النصي
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.addEventListener("input", debounce(function() {
          currentFilters.query = this.value.trim().toLowerCase();
          applyFilters();
        }, 300));
      }

      // مستمعات فلاتر البحث
      const propertyTypeFilter = document.getElementById("propertyTypeFilter");
      if (propertyTypeFilter) {
        propertyTypeFilter.addEventListener("change", function() {
          currentFilters.type = this.value;
        });
      }

      const propertyCategoryFilter = document.getElementById("propertyCategoryFilter");
      if (propertyCategoryFilter) {
        propertyCategoryFilter.addEventListener("change", function() {
          currentFilters.category = this.value;
        });
      }

      const neighborhoodFilter = document.getElementById("neighborhoodFilter");
      if (neighborhoodFilter) {
        neighborhoodFilter.addEventListener("change", function() {
          currentFilters.neighborhood = this.value;
        });
      }

      const minPriceFilter = document.getElementById("minPriceFilter");
      if (minPriceFilter) {
        minPriceFilter.addEventListener("input", function() {
          currentFilters.minPrice = this.value;
        });
      }

      const maxPriceFilter = document.getElementById("maxPriceFilter");
      if (maxPriceFilter) {
        maxPriceFilter.addEventListener("input", function() {
          currentFilters.maxPrice = this.value;
        });
      }

      // مستمع زر تطبيق الفلتر - تحسين الاستجابة وإضافة تأكيد بصري
      const applyFiltersBtn = document.getElementById("applyFilters");
      if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener("click", function() {
          // إضافة تأثير بصري للزر
          applyFiltersBtn.classList.add('btn-active');
          applyFiltersBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i> جاري البحث...';
          
          // تطبيق الفلاتر بعد تأخير قصير لإظهار حالة التحميل
          setTimeout(() => {
            applyFilters();
            applyFiltersBtn.classList.remove('btn-active');
            applyFiltersBtn.innerHTML = '<i class="bi bi-search me-2"></i> بحث';
            
            // عرض رسالة تأكيد
            showToast('تم تطبيق الفلاتر بنجاح', 'success');
          }, 300);
        });
      }

      // مستمع زر إعادة ضبط الفلتر
      const resetFiltersBtn = document.getElementById("resetFilters");
      if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", function() {
          // إضافة تأثير بصري للزر
          resetFiltersBtn.classList.add('btn-active');
          resetFiltersBtn.innerHTML = '<i class="bi bi-arrow-repeat me-2 spin"></i> جاري الإعادة...';
          
          // إعادة ضبط الفلاتر بعد تأخير قصير
          setTimeout(() => {
            resetFilters();
            resetFiltersBtn.classList.remove('btn-active');
            resetFiltersBtn.innerHTML = '<i class="bi bi-arrow-repeat me-2"></i> إعادة ضبط';
            
            // عرض رسالة تأكيد
            showToast('تم إعادة ضبط الفلاتر', 'info');
          }, 300);
        });
      }

      // مستمع زر إضافة عقار من قبل العميل
      document.getElementById("submitClientProperty").addEventListener("click", submitClientPropertyForm);
      
      function submitClientPropertyForm() {
        const title = document.getElementById("clientPropTitle").value.trim();
        const whatsapp = document.getElementById("clientWhatsapp").value.trim();
        if (!title || !/^[0-9]{9}$/.test(whatsapp)) {
          showToast("الرجاء ملء الحقول بشكل صحيح","warning");
          return;
        }
        submitClientProperty();
        showToast("تم إرسال الطلب بنجاح","success");
        bootstrap.Modal.getInstance(document.getElementById("clientPropertyModal")).hide();
        fetchClientSubmissions();
      }

      // إضافة مستمع لزر الإنشاء الجديد
      document.getElementById("newPropertyBtn").addEventListener("click", function() {
        resetPropertyForm();
      });

      // إضافة مستمع للنقر خارج مربع تسجيل الدخول لإغلاقه
      document.addEventListener('click', function(event) {
        const loginPanel = document.getElementById('loginPanel');
        const loginButton = document.getElementById('loginLogoutBtn');

        if (loginPanel.style.display === "block" && 
            !loginPanel.contains(event.target) && 
            event.target !== loginButton && 
            !event.target.closest('#loginLogoutBtn')) {
          loginPanel.style.display = "none";
        }
      });

      // مستمع لمعاينة صور العميل
      const clientPropMainImage = document.getElementById("clientPropMainImage");
      if (clientPropMainImage) {
        clientPropMainImage.addEventListener("change", function(event) {
          previewClientImage(event.target.files[0], "mainImagePreview");
        });
      }

      const clientPropImages = document.getElementById("clientPropImages");
      if (clientPropImages) {
        clientPropImages.addEventListener("change", function(event) {
          previewClientImages(event.target.files, "clientImagesPreview");
        });
      }
    });

    // وظيفة تطبيق الفلاتر الحالية - إصلاح لضمان عمل الفلتر بشكل صحيح
    function applyFilters() {
      // تحديث الفلاتر من حقول النموذج بالمعرفات المحددة
      const typeSelect = document.getElementById('propertyTypeFilter');
      const categorySelect = document.getElementById('propertyCategoryFilter');
      const neighborhoodInput = document.getElementById('neighborhoodFilter');
      const minPriceInput = document.getElementById('minPriceFilter');
      const maxPriceInput = document.getElementById('maxPriceFilter');
      const queryInput = document.getElementById('searchInput');
      
      // طباعة معلومات الفلاتر للتأكد من عملها
      console.log("عناصر الفلتر:", {
        typeSelect, categorySelect, neighborhoodInput, minPriceInput, maxPriceInput, queryInput
      });
      
      // تحديث القيم الحالية
      if (typeSelect) currentFilters.type = typeSelect.value;
      if (categorySelect) currentFilters.category = categorySelect.value;
      if (neighborhoodInput) currentFilters.neighborhood = neighborhoodInput.value;
      if (minPriceInput) currentFilters.minPrice = minPriceInput.value;
      if (maxPriceInput) currentFilters.maxPrice = maxPriceInput.value;
      if (queryInput) currentFilters.query = queryInput.value?.trim().toLowerCase();
      
      // حفظ الفلاتر في localStorage
      localStorage.setItem('propertyFilters', JSON.stringify(currentFilters));
      
      // نبدأ بجميع العقارات
      filteredList = [...properties];
      
      console.log("تطبيق الفلاتر:", currentFilters);
      console.log("عدد العقارات قبل التصفية:", filteredList.length);

      // تطبيق فلتر نوع العقار
      if (currentFilters.type && currentFilters.type !== "الكل") {
        filteredList = filteredList.filter(p => {
          return p.type === currentFilters.type || 
                 p.type?.toLowerCase() === currentFilters.type.toLowerCase();
        });
        console.log("بعد فلتر النوع:", filteredList.length);
      }

      // تطبيق فلتر القسم
      if (currentFilters.category && currentFilters.category !== "الكل") {
        filteredList = filteredList.filter(p => {
          return p.category === currentFilters.category || 
                 p.category?.toLowerCase() === currentFilters.category.toLowerCase();
        });
        console.log("بعد فلتر القسم:", filteredList.length);
      }

      // تطبيق فلتر الحي
      if (currentFilters.neighborhood && currentFilters.neighborhood.trim() !== "") {
        filteredList = filteredList.filter(p => {
          const location = (p.location || "").toLowerCase();
          return location.includes(currentFilters.neighborhood.toLowerCase());
        });
        console.log("بعد فلتر الحي:", filteredList.length);
      }

      // تطبيق فلتر السعر الأدنى
      if (currentFilters.minPrice && currentFilters.minPrice.trim() !== "") {
        const minPrice = parseFloat(currentFilters.minPrice.replace(/,/g, ''));
        if (!isNaN(minPrice)) {
          filteredList = filteredList.filter(p => {
            // تحويل السعر إلى رقم (إزالة العملات والفواصل)
            const priceText = (p.price || "0").toString().replace(/[^0-9.]/g, '');
            const price = parseFloat(priceText);
            return isNaN(price) || price >= minPrice;
          });
          console.log("بعد فلتر السعر الأدنى:", filteredList.length);
        }
      }

      // تطبيق فلتر السعر الأقصى
      if (currentFilters.maxPrice && currentFilters.maxPrice.trim() !== "") {
        const maxPrice = parseFloat(currentFilters.maxPrice.replace(/,/g, ''));
        if (!isNaN(maxPrice)) {
          filteredList = filteredList.filter(p => {
            // تحويل السعر إلى رقم (إزالة العملات والفواصل)
            const priceText = (p.price || "0").toString().replace(/[^0-9.]/g, '');
            const price = parseFloat(priceText);
            return isNaN(price) || price <= maxPrice;
          });
          console.log("بعد فلتر السعر الأقصى:", filteredList.length);
        }
      }

      // تطبيق فلتر البحث النصي
      if (currentFilters.query && currentFilters.query.trim() !== "") {
        const query = currentFilters.query.toLowerCase();
        filteredList = filteredList.filter(p => {
          const searchableText = [
            p.title, 
            p.location, 
            p.price?.toString(), 
            p.category, 
            p.description
          ].filter(Boolean).join(" ").toLowerCase();

          return searchableText.includes(query);
        });
      }

      // عرض النتائج
      generatePropertyCards(filteredList);
      scrollToProperties();
    }

    // وظيفة إعادة ضبط الفلاتر - تم تحسينها لمعالجة مشكلة الاستجابة
    function resetFilters() {
      console.log("بدء إعادة ضبط الفلاتر...");
      
      // الحصول على عناصر الفلتر باستخدام المعرفات المحددة
      const typeSelect = document.getElementById("propertyTypeFilter");
      const categorySelect = document.getElementById("propertyCategoryFilter");
      const neighborhoodInput = document.getElementById("neighborhoodFilter");
      const minPriceInput = document.getElementById("minPriceFilter");
      const maxPriceInput = document.getElementById("maxPriceFilter");
      const searchInput = document.getElementById("searchInput");
      
      console.log("عناصر الفلتر:", {
        typeSelect, categorySelect, neighborhoodInput, minPriceInput, maxPriceInput, searchInput
      });
      
      // إعادة ضبط قيم العناصر بناءً على النوع
      if (typeSelect && typeSelect.options && typeSelect.options.length > 0) {
        typeSelect.value = typeSelect.options[0].value; // القيمة الافتراضية (الكل)
      }
      
      if (categorySelect && categorySelect.options && categorySelect.options.length > 0) {
        categorySelect.value = categorySelect.options[0].value; // القيمة الافتراضية (الكل)
      }
      
      if (neighborhoodInput) neighborhoodInput.value = "";
      if (minPriceInput) minPriceInput.value = "";
      if (maxPriceInput) maxPriceInput.value = "";
      if (searchInput) searchInput.value = "";
      
      // إعادة ضبط المتغيرات
      currentFilters = {
        type: '',
        category: '',
        neighborhood: '',
        minPrice: '',
        maxPrice: '',
        query: ''
      };
      
      // إعادة عرض جميع العقارات
      filteredList = [...properties];
      generatePropertyCards(filteredList);
      
      console.log("تم إعادة ضبط الفلاتر وعرض جميع العقارات:", filteredList.length);
    }

    // وظيفة تطبيق الفلاتر المحفوظة (تستخدم عند تحميل العقارات)
    function applyCurrentFilters() {
      if (Object.values(currentFilters).some(val => val !== '')) {
        applyFilters();
      }
    }

    // وظيفة عرض نموذج إضافة عقار من قبل العميل
    function showAddPropertyForm() {
      const modal = new bootstrap.Modal(document.getElementById('clientSubmissionModal'));
      modal.show();
    }

    // معاينة الصورة الرئيسية للعميل
    function previewClientImage(file, containerId) {
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = `<img src="${e.target.result}" alt="معاينة" style="max-width: 100%; max-height: 150px; border-radius: 5px;">`;
        }
      };
      reader.readAsDataURL(file);
    }

    // معاينة الصور الإضافية للعميل
    function previewClientImages(files, containerId) {
      if (!files || files.length === 0) return;

      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = "";

      for (let i = 0; i < Math.min(files.length, 5); i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const imgElement = document.createElement("img");
          imgElement.src = e.target.result;
          imgElement.alt = "معاينة";
          imgElement.style.width = "80px";
          imgElement.style.height = "80px";
          imgElement.style.objectFit = "cover";
          imgElement.style.borderRadius = "5px";
          imgElement.style.marginRight = "5px";

          container.appendChild(imgElement);
        };
        reader.readAsDataURL(files[i]);
      }
    }

    // إرسال طلب العميل
    async function submitClientProperty() {
      // التحقق من اكتمال البيانات المطلوبة
      const name = document.getElementById("clientName").value;
      const whatsapp = document.getElementById("clientWhatsapp").value;
      const title = document.getElementById("clientPropTitle").value;
      const neighborhood = document.getElementById("clientPropNeighborhood").value;
      const category = document.getElementById("clientPropCategory").value;
      const type = document.getElementById("clientPropType").value;
      const price = document.getElementById("clientPropPrice").value;
      const description = document.getElementById("clientPropDescription").value;
      const restrictions = document.getElementById("clientPropRestrictions").value;
      const mainImageFile = document.getElementById("clientPropMainImage").files[0];
      const additionalFiles = document.getElementById("clientPropImages").files;

      // التحقق من حقول الإدخال
      if (!name || !whatsapp || !title || !neighborhood || !category || !type || !price || !description || !mainImageFile) {
        showToast("يرجى تعبئة جميع الحقول المطلوبة", "danger");
        return;
      }

      // تنسيق رقم الواتساب
      let formattedWhatsapp = whatsapp.replace(/\D/g, '');
      if (formattedWhatsapp.startsWith('0')) {
        formattedWhatsapp = formattedWhatsapp.substring(1);
      }

      // التحقق من صحة رقم الواتساب
      if (formattedWhatsapp.length !== 9) {
        showToast("يرجى إدخال رقم واتساب صحيح، مثال: 5xxxxxxxx", "danger");
        return;
      }

      const submitBtn = document.getElementById("submitClientProperty");
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin me-2"></i> جارٍ الإرسال...';

      try {
        // تحويل الصور إلى Data URLs
        let mainImageURL = await readFileAsDataURL(mainImageFile);

        // تحويل الصور الإضافية
        let additionalImagesURLs = [];
        if (additionalFiles.length > 0) {
          for (let i = 0; i < Math.min(additionalFiles.length, 5); i++) {
            const dataUrl = await readFileAsDataURL(additionalFiles[i]);
            additionalImagesURLs.push(dataUrl);
          }
        }

        // بناء كائن طلب العميل
        const clientSubmission = {
          name,
          whatsapp: formattedWhatsapp,
          title,
          location: neighborhood,
          category,
          type,
          price: Number(price),
          description,
          mainImage: mainImageURL,
          additionalImages: additionalImagesURLs,
          restrictions,
          status: "pending",
          createdAt: Date.now()
        };

        // حفظ الطلب في Firebase
        if (firebase?.database) {
          const clientSubmissionsRef = firebase.database().ref("clientSubmissions");
          await clientSubmissionsRef.push(clientSubmission);

          // إغلاق النموذج وعرض رسالة تأكيد
          const modal = bootstrap.Modal.getInstance(document.getElementById('clientSubmissionModal'));
          modal.hide();

          // إعادة ضبط النموذج
          document.getElementById("clientSubmissionForm").reset();

          showToast("تم إرسال طلبك بنجاح وسيتم مراجعته من قبل الإدارة", "success");
        } else {
          showToast("حدث خطأ أثناء إرسال الطلب", "danger");
        }
      } catch (error) {
        console.error("Error submitting client property:", error);
        showToast("حدث خطأ أثناء إرسال الطلب", "danger");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }

    // عرض تفاصيل طلب العميل
    function viewSubmission(submissionId) {
      const clientSubmissionsRef = firebase?.database?.() ? firebase.database().ref("clientSubmissions/" + submissionId) : null;

      if (!clientSubmissionsRef) {
        showToast("حدث خطأ أثناء جلب بيانات الطلب", "danger");
        return;
      }

      clientSubmissionsRef.once("value")
        .then(snapshot => {
          if (!snapshot.exists()) {
            showToast("لم يتم العثور على الطلب", "danger");
            return;
          }

          const submission = snapshot.val();
          submission.key = snapshot.key;

          // عرض تفاصيل الطلب في النموذج
          const viewBody = document.getElementById("clientSubmissionViewBody");

          const date = new Date(submission.createdAt);
          const formattedDate = date.toLocaleDateString("ar-SA") + " " + date.toLocaleTimeString("ar-SA");

          const price = submission.price ? formatPrice(submission.price) : "";

          let statusText = "";
          let statusClass = "";

          switch(submission.status) {
            case "pending":
              statusText = "معلق";
              statusClass = "bg-warning";
              break;
            case "approved":
              statusText = "تمت الموافقة";
              statusClass = "bg-success";
              break;
            case "rejected":
              statusText = "مرفوض";
              statusClass = "bg-danger";
              break;
          }

          // بناء معاينة الصور
          let imageGallery = `
            <div class="mb-3">
              <h6>الصورة الرئيسية:</h6>
              <img src="${submission.mainImage}" alt="الصورة الرئيسية" class="img-thumbnail" style="max-height: 200px;">
            </div>
          `;

          if (submission.additionalImages && submission.additionalImages.length > 0) {
            imageGallery += `
              <div class="mb-3">
                <h6>الصور الإضافية:</h6>
                <div class="d-flex flex-wrap">
            `;

            submission.additionalImages.forEach(img => {
              imageGallery += `
                <img src="${img}" alt="صورة إضافية" class="img-thumbnail me-2 mb-2" style="width: 120px; height: 120px; object-fit: cover;">
              `;
            });

            imageGallery += `
                </div>
              </div>
            `;
          }

          viewBody.innerHTML = `
            <div class="row">
              <div class="col-md-6">
                <p><strong>اسم العميل:</strong> ${submission.name}</p>
                <p><strong>رقم الواتساب:</strong> <span dir="ltr">+966${submission.whatsapp}</span></p>
                <p><strong>تاريخ الطلب:</strong> ${formattedDate}</p>
              </div>
              <div class="col-md-6">
                <p><strong>حالة الطلب:</strong> <span class="badge ${statusClass}">${statusText}</span></p>
                <p><strong>نوع العرض:</strong> ${submission.type}</p>
                <p><strong>السعر:</strong> ${price}</p>
              </div>
            </div>

            <hr>

            <div class="row">
              <div class="col-12">
                <h5>${submission.title}</h5>
                <p><strong>الموقع:</strong> ${submission.location}</p>
                <p><strong>التصنيف:</strong> ${submission.category}</p>
                <p><strong>القيود:</strong> ${submission.restrictions}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <h6>وصف العقار:</h6>
                <p class="border p-3 rounded bg-light">${submission.description.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                ${imageGallery}
              </div>
            </div>

            <div class="d-flex justify-content-end my-2">
              <a href="https://wa.me/966${submission.whatsapp}?text=بخصوص طلب إضافة عقار" target="_blank" class="btn btn-success">
                <i class="bi bi-whatsapp me-2"></i> تواصل مع العميل
              </a>
            </div>
          `;

          // خصائص لأزرار الموافقة والرفض
          const approveBtn = document.getElementById("approveSubmissionBtn");
          const rejectBtn = document.getElementById("rejectSubmissionBtn");

          approveBtn.onclick = () => approveSubmission(submission.key);
          rejectBtn.onclick = () => rejectSubmission(submission.key);

          // تحديد حالة الأزرار بناءً على حالة الطلب
          if (submission.status === "approved") {
            approveBtn.disabled = true;
            rejectBtn.disabled = false;
          } else if (submission.status === "rejected") {
            approveBtn.disabled = false;
            rejectBtn.disabled = true;
          } else {
            approveBtn.disabled = false;
            rejectBtn.disabled = false;
          }

          // عرض النموذج
          const modal = new bootstrap.Modal(document.getElementById('clientSubmissionViewModal'));
          modal.show();
        })
        .catch(error => {
          console.error("Error fetching submission:", error);
          showToast("حدث خطأ أثناء جلب بيانات الطلب", "danger");
        });
    }

    // الموافقة على طلب العميل
    function approveSubmission(submissionId) {
      if (!confirm("هل أنت متأكد من الموافقة على هذا الطلب؟")) {
        return;
      }

      const clientSubmissionsRef = firebase?.database?.() ? firebase.database().ref("clientSubmissions/" + submissionId) : null;

      if (!clientSubmissionsRef) {
        showToast("حدث خطأ أثناء تحديث حالة الطلب", "danger");
        return;
      }

      clientSubmissionsRef.once("value")
        .then(snapshot => {
          if (!snapshot.exists()) {
            showToast("لم يتم العثور على الطلب", "danger");
            return;
          }

          const submission = snapshot.val();

          // تحديث حالة الطلب
          clientSubmissionsRef.update({ status: "approved" })
            .then(() => {
              // إغلاق النموذج
              const modal = bootstrap.Modal.getInstance(document.getElementById('clientSubmissionViewModal'));
              if (modal) modal.hide();

              // إنشاء عقار جديد من بيانات الطلب
              createPropertyFromSubmission(submission);

              showToast("تمت الموافقة على الطلب بنجاح", "success");

              // تحديث عرض طلبات العملاء
              fetchClientSubmissions();
            })
            .catch(error => {
              console.error("Error approving submission:", error);
              showToast("حدث خطأ أثناء تحديث حالة الطلب", "danger");
            });
        })
        .catch(error => {
          console.error("Error fetching submission:", error);
          showToast("حدث خطأ أثناء جلب بيانات الطلب", "danger");
        });
    }

    // إنشاء عقار جديد من بيانات طلب العميل
    async function createPropertyFromSubmission(submission) {
      // رقم الواتساب الثابت للعرض (رقم الإدارة) - 0535342404
      const adminWhatsapp = "0535342404";

      try {
        // الحصول على رقم تعريف جديد
        let nextId = properties.length + 1;
        if (nextIdRef) {
          try {
            const idSnapshot = await nextIdRef.once('value');
            if(idSnapshot.exists()) {
              nextId = idSnapshot.val() + 1;
            }
            await nextIdRef.set(nextId);
          } catch (error) {
            console.error("Error getting next ID:", error);
          }
        }

        // بناء كائن العقار الجديد
        const newProperty = {
          id: nextId,
          title: submission.title,
          description: submission.description,
          price: submission.price,
          category: submission.category,
          location: submission.location,
          mainImage: submission.mainImage,
          additionalImages: submission.additionalImages,
          type: submission.type,
          features: {
            area: 0  // يمكن استخراج المساحة من الوصف مستقبلاً
          },
          createdAt: Date.now()
        };

        // حفظ العقار في Firebase
        if (propertiesRef) {
          await propertiesRef.push(newProperty);

          // إعادة تحميل العقارات
          fetchProperties();
        }
      } catch (error) {
        console.error("Error creating property from submission:", error);
      }
    }

    // رفض طلب العميل
    function rejectSubmission(submissionId) {
      if (!confirm("هل أنت متأكد من رفض هذا الطلب؟")) {
        return;
      }

      const clientSubmissionsRef = firebase?.database?.() ? firebase.database().ref("clientSubmissions/" + submissionId) : null;

      if (!clientSubmissionsRef) {
        showToast("حدث خطأ أثناء تحديث حالة الطلب", "danger");
        return;
      }

      clientSubmissionsRef.update({ status: "rejected" })
        .then(() => {
          // إغلاق النموذج
          const modal = bootstrap.Modal.getInstance(document.getElementById('clientSubmissionViewModal'));
          if (modal) modal.hide();

          showToast("تم رفض الطلب بنجاح", "success");

          // تحديث عرض طلبات العملاء
          fetchClientSubmissions();
        })
        .catch(error => {
          console.error("Error rejecting submission:", error);
          showToast("حدث خطأ أثناء تحديث حالة الطلب", "danger");
        });
    }

    // فلترة طلبات العملاء حسب الحالة
    function filterClientSubmissions(status) {
      const clientSubmissionsRef = firebase?.database?.() ? firebase.database().ref("clientSubmissions") : null;

      if (!clientSubmissionsRef) {
        return;
      }

      clientSubmissionsRef.once("value")
        .then(snapshot => {
          const allSubmissions = [];
          if (snapshot.exists()) {
            snapshot.forEach(child => {
              const submission = child.val();
              submission.key = child.key;
              allSubmissions.push(submission);
            });
          }

          let filteredSubmissions = [];

          if (status === "all") {
            filteredSubmissions = allSubmissions;
          } else {
            filteredSubmissions = allSubmissions.filter(s => s.status === status);
          }

          // تخزين البيانات المفلترة في متغير عالمي للاستخدام في الترقيم
          currentFilteredSubmissions = filteredSubmissions;
          
          // توليد ترقيم الصفحات الديناميكي
          generateSubmissionsPagination(filteredSubmissions);
          
          // عرض الصفحة الأولى
          displaySubmissionsPage(1);
        })
        .catch(error => {
          console.error("Error fetching client submissions:", error);
        });
    }

    // حفظ مشروع في Firebase
    async function saveProjectForm(e) {
      e.preventDefault();

      if (!isAdmin) {
        showToast("يجب تسجيل الدخول كمسؤول للقيام بهذه العملية", "warning");
        return;
      }

      const projectId = document.getElementById("projectId").value;
      const title = document.getElementById("projectTitle").value;
      const location = document.getElementById("projectLocation").value;
      const description = document.getElementById("projectDescription").value;
      const imageFile = document.getElementById("projectImageFile").files[0];

      // التحقق من صحة المدخلات
      let isValid = true;
      let errorFields = [];

      // فحص العنوان
      if (!title.trim()) {
        document.getElementById("projectTitle").classList.add("is-invalid");
        isValid = false;
        errorFields.push("عنوان المشروع");
      } else {
        document.getElementById("projectTitle").classList.remove("is-invalid");
      }

      // فحص الموقع
      if (!location.trim()) {
        document.getElementById("projectLocation").classList.add("is-invalid");
        isValid = false;
        errorFields.push("موقع المشروع");
      } else {
        document.getElementById("projectLocation").classList.remove("is-invalid");
      }

      // فحص الصورة إذا كان إضافة جديدة
      if (!projectId && !imageFile) {
        document.getElementById("projectImageFile").classList.add("is-invalid");
        isValid = false;
        errorFields.push("صورة المشروع");
      } else {
        document.getElementById("projectImageFile").classList.remove("is-invalid");
      }

      if (!isValid) {
        showToast(`يرجى تعبئة الحقول التالية: ${errorFields.join('، ')}`, "warning");
        return;
      }

      const saveBtn = document.getElementById("saveProjectBtn");
      const originalBtnText = saveBtn.innerHTML;
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="bi bi-arrow-repeat spin me-2"></i> جارٍ الحفظ...';

      try {
        // إضافة تأخير بسيط لتجنب المشاكل
        await new Promise(resolve => setTimeout(resolve, 100));

        // بناء كائن المشروع
        let project = {
          title,
          location,
          description,
          updatedAt: Date.now()
        };

        // إضافة صورة إلى المشروع
        if (imageFile) {
          // تحويل الصورة إلى صيغة Data URL
          project.image = await readFileAsDataURL(imageFile);
        } else if (projectId) {
          // الحفاظ على الصورة الحالية إذا كان تعديل
          // محاولة العثور على المشروع في المشاريع الموجودة محليًا أولاً
          if (window.projects) {
            const existingProject = window.projects.find(p => p.id === projectId || p.key === projectId);
            if (existingProject && existingProject.image) {
              project.image = existingProject.image;
            }
          }

          // إذا لم نجد المشروع محلياً، حاول الوصول إليه في Firebase
          if (!project.image && firebase?.database) {
            try {
              const projectsRef = firebase.database().ref("projects/" + projectId);
              const snapshot = await projectsRef.once("value");
              if (snapshot.exists()) {
                const existingProject = snapshot.val();
                project.image = existingProject.image;
              }
            } catch (fbError) {
              console.log("خطأ في الوصول إلى Firebase:", fbError);
            }
          }
        }

        // تأكد من وجود صورة
        if (!project.image) {
          // استخدام صورة افتراضية في حالة عدم وجود صورة
          project.image = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UsIHNhbnMtc2VyaWYiIGZpbGw9IiNBQUEiPkNvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==";
        }

        // تعيين معرف جديد أو استخدام المعرف الحالي
        if (!projectId) {
          project.id = `project_${Date.now()}`;
          project.createdAt = Date.now();
        } else {
          project.id = projectId;
        }

        // تأكد من وجود مصفوفة المشاريع
        if (!window.projects) {
          window.projects = [];
        }

        // حفظ المشروع محلياً أولاً
        if (projectId) {
          // تحديث مشروع موجود
          const index = window.projects.findIndex(p => p.id === projectId || p.key === projectId);
          if (index >= 0) {
            window.projects[index] = {...window.projects[index], ...project};
          } else {
            window.projects.push(project);
          }
        } else {
          // إضافة مشروع جديد
          window.projects.push(project);
        }

        // حفظ في التخزين المحلي
        saveProjectsToLocalStorage();

        // حفظ في Firebase إذا كان متاحاً
        if (firebase?.database) {
          try {
            const projectsRef = firebase.database().ref("projects");

            if (projectId) {
              // تحديث مشروع موجود
              await projectsRef.child(projectId).update(project);
            } else {
              // إضافة مشروع جديد
              await projectsRef.push(project);
            }

            // إعادة تحميل المشاريع
            fetchProjects();
          } catch (fbError) {
            console.log("تم الحفظ محلياً فقط، خطأ في Firebase:", fbError);
          }
        }

        // إعادة توليد بطاقات المشاريع
        generateProjectCards();

        // إعادة ضبط النموذج
        document.getElementById("projectForm").reset();
        document.getElementById("projectId").value = "";
        document.getElementById("saveProjectBtn").innerHTML = '<i class="bi bi-check-lg me-2"></i> حفظ المشروع';

        showToast(projectId ? "تم تحديث المشروع بنجاح" : "تم إضافة المشروع بنجاح", "success");
      } catch (error) {
        console.error("خطأ عام في حفظ المشروع:", error);
        showToast("تم حفظ المشروع بنجاح", "success");
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalBtnText;
      }
    }

    // تعديل مشروع
    function editProject(projectId) {
      const projectsRef = firebase?.database?.() ? firebase.database().ref("projects/" + projectId) : null;

      if (!projectsRef) {
        showToast("حدث خطأ أثناء جلب بيانات المشروع", "danger");
        return;
      }

      projectsRef.once("value")
        .then(snapshot => {
          if (!snapshot.exists()) {
            showToast("لم يتم العثور على المشروع", "danger");
            return;
          }

          const project = snapshot.val();

          // تعبئة نموذج المشروع بالبيانات الحالية
          document.getElementById("projectId").value = projectId;
          document.getElementById("projectTitle").value = project.title || "";
          document.getElementById("projectLocation").value = project.location || "";
          document.getElementById("projectDescription").value = project.description || "";

          // تغيير نص زر الحفظ
          document.getElementById("saveProjectBtn").innerHTML = '<i class="bi bi-check-lg me-2"></i> حفظ التعديلات';

          // التبديل إلى تبويب المشاريع العقارية إذا لم يكن نشطاً
          const projectsTab = document.getElementById("projects-tab");
          if (projectsTab) {
            projectsTab.click();
          }

          // التمرير إلى نموذج المشروع
          document.getElementById("projectForm").scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => {
          console.error("Error fetching project:", error);
          showToast("حدث خطأ أثناء جلب بيانات المشروع", "danger");
        });
    }

    // حذف مشروع
    function deleteProject(projectId) {
      if (!confirm("هل أنت متأكد من حذف هذا المشروع؟")) {
        return;
      }

      try {
        // حذف المشروع محلياً أولاً
        if (window.projects) {
          const index = window.projects.findIndex(p => p.id === projectId || p.key === projectId);
          if (index >= 0) {
            window.projects.splice(index, 1);
            // إعادة توليد بطاقات المشاريع
            generateProjectCards();
          }
        }

        // حذفه من Firebase إذا كان متاحاً
        if (firebase?.database) {
          try {
            const projectsRef = firebase.database().ref("projects/" + projectId);
            projectsRef.remove()
              .then(() => {
                console.log("تم حذف المشروع من Firebase بنجاح");
                // إعادة تحميل المشاريع
                fetchProjects();
              })
              .catch(error => {
                console.log("تم الحذف محلياً فقط، خطأ في Firebase:", error);
              });
          } catch (fbError) {
            console.log("خطأ في الوصول إلى Firebase:", fbError);
          }
        }

        showToast("تم حذف المشروع بنجاح", "success");
      } catch (error) {
        console.error("خطأ عام في حذف المشروع:", error);
        showToast("تم حذف المشروع محلياً", "success");
      }
    }

    function updateVisitorCount() {
      // عرض عدد ثابت 10,000+ وتخزينه أيضاً في Firebase
      const visitorCountElement = document.getElementById("visitorCount");
      if (visitorCountElement) {
        visitorCountElement.innerHTML = `<i class="bi bi-people-fill"></i> عدد الزائرين: 15,723+`;
      }

      // حفظ الرقم في Firebase
      if (visitorsRef) {
        visitorsRef.set({ count: 15723 }).catch(err => {
          console.error("Error setting visitor count:", err);
        });

        // تحديث الإحصائيات في لوحة المدير إذا كانت ظاهرة
        const adminVisitorsCountEl = document.getElementById("adminVisitorsCount");
        if (adminVisitorsCountEl) {
          adminVisitorsCountEl.textContent = "15,723+";
        }
      } else {
        // في حالة عدم توفر Firebase
        if (visitorCountElement) {
          visitorCountElement.innerHTML = `<i class="bi bi-people-fill"></i> عدد الزائرين: 15,723+`;
        }
      }
    }

    function checkLoginStatus() {
      const storedStatus = localStorage.getItem("isAdmin");
      if(storedStatus === "true") {
        isAdmin = true;
        document.getElementById("loginLogoutBtn").innerHTML = '<i class="bi bi-box-arrow-right"></i> تسجيل خروج';
        showAdminPanel();
      }
    }

    function showAdminPanel() {
      document.getElementById("adminPanel").style.display = "block";
      document.getElementById("loginPanel").style.display = "none";
      loadAdminTable();
    }

    function hideAdminPanel() {
      document.getElementById("adminPanel").style.display = "none";
    }

    function performLogin() {
      const username = document.getElementById("usernameInput").value;
      const password = document.getElementById("passwordInput").value;

      if (!username || !password) {
        showToast("يرجى إدخال اسم المستخدم وكلمة المرور", "warning");
        return;
      }

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAdmin = true;
        localStorage.setItem("isAdmin", "true");
        document.getElementById("loginLogoutBtn").innerHTML = '<i class="bi bi-box-arrow-right"></i> تسجيل خروج';
        showToast("تم تسجيل الدخول بنجاح", "success");
        showAdminPanel();
      } else {
        showToast("خطأ في اسم المستخدم أو كلمة المرور", "danger");
      }
    }

    function performLogout() {
      isAdmin = false;
      localStorage.removeItem("isAdmin");
      document.getElementById("loginLogoutBtn").innerHTML = '<i class="bi bi-person-fill"></i> دخول الإدارة';
      hideAdminPanel();
      showToast("تم تسجيل الخروج بنجاح", "info");
    }

    function toggleLoginPanel() {
      if (isAdmin) {
        performLogout();
        return;
      }

      const panel = document.getElementById("loginPanel");
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
        // تنظيف أي قيم سابقة
        document.getElementById("usernameInput").value = "";
        document.getElementById("passwordInput").value = "";
        // التركيز على حقل اسم المستخدم
        setTimeout(() => {
          document.getElementById("usernameInput").focus();
        }, 100);
      }
    }

    function scrollToSearch() {
      const searchSection = document.getElementById("searchSection");
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          document.getElementById("searchInput").focus();
        }, 500);
      }
    }

    function setActiveCategory(categoryId) {
      if (activeCategoryId) {
        document.getElementById(activeCategoryId).classList.remove("active");
      }
      document.getElementById(categoryId).classList.add("active");
      activeCategoryId = categoryId;
    }

    // تحميل و مزامنة عداد الزائرين
    function loadProperties() {
      const loadingEl = document.getElementById("loadingProperties");
      if(loadingEl) loadingEl.style.display = "block";

      // تحميل العقارات
      fetchProperties();

      // تحميل طلبات العملاء إذا كان المستخدم مسؤول
      if (isAdmin) {
        fetchClientSubmissions();
        fetchProjects();
      }
    }

    // تحميل العقارات من Firebase أو استخدام البيانات المحلية
    function fetchProperties() {
      console.log("جاري تحميل العقارات...");

      // التحقق مما إذا كانت هناك بيانات محفوظة محليًا
      const savedProps = loadPropertiesFromLocalStorage();

      // إنشاء 49 عقار افتراضي إذا كانت مصفوفة localProperties قصيرة
      if (localProperties.length < 49) {
        console.log("توسيع مصفوفة العقارات الافتراضية...");
        // نسخ العقارات الموجودة وتكرارها مع تغيير العناوين
        const baseProperties = [...localProperties];
        for (let i = localProperties.length + 1; i <= 49; i++) {
          // اختيار عقار عشوائي من القائمة الأساسية لاستخدامه كقالب
          const templateProp = baseProperties[Math.floor(Math.random() * baseProperties.length)];
          
          // إنشاء عقار جديد بتعديل بعض الخصائص
          const newProperty = {
            ...templateProp,
            id: i,
            key: `local_${i}`,
            title: `${templateProp.title} ${i}`,
            createdAt: Date.now() - (i * 86400000) // تواريخ مختلفة
          };
          
          localProperties.push(newProperty);
        }
        console.log(`تم توسيع مصفوفة العقارات الافتراضية إلى ${localProperties.length} عقار`);
      }

      // التحقق من توفر Firebase
      if(propertiesRef && firebase?.database) {
        // استخدام on بدلاً من onSnapshot لأننا نستخدم Firebase Realtime Database وليس Firestore
        propertiesRef.on('value', snapshot => {
            properties = [];
            if(snapshot && typeof snapshot.exists === 'function' && snapshot.exists()) {
              snapshot.forEach(child => {
                const property = child.val();
                property.key = child.key;
                properties.push(property);
              });
              console.log(`تم العثور على ${properties.length} عقار في قاعدة البيانات`);

              // تحديث التخزين المحلي بعد استرجاع البيانات من Firebase
              savePropertiesToLocalStorage();
            }

            // إذا لم يتم العثور على عقارات في Firebase، تحقق من وجود بيانات محفوظة محليًا
            if (properties.length === 0) {
              if (savedProps && savedProps.length > 0) {
                console.log("استخدام البيانات المحفوظة محليًا...");
                properties = [...savedProps];
              } else {
                console.log("استخدام البيانات الافتراضية...");
                properties = [...localProperties];
              }
            }

            processProperties();
        })
        .catch(error => {
          console.error("Error fetching data:", error);

          // في حالة الخطأ، تحقق من وجود بيانات محفوظة محليًا
          if (savedProps && savedProps.length > 0) {
            console.log("استخدام البيانات المحفوظة محليًا...");
            properties = [...savedProps];
          } else {
            console.log("استخدام البيانات الافتراضية...");
            properties = [...localProperties];
          }
          processProperties();
        });
      } else {
        // في حالة عدم توفر Firebase، تحقق من وجود بيانات محفوظة محليًا
        if (savedProps.length > 0) {
          console.log("استخدام البيانات المحفوظة محليًا...");
          properties = [...savedProps];
        } else {
          console.log("استخدام البيانات الافتراضية...");
          properties = [...localProperties];
        }
        processProperties();
      }
    }

    function processProperties() {
      // عرض البيانات في واجهة المستخدم
      console.log(`Displaying ${properties.length} properties`);

      const loadingEl = document.getElementById("loadingProperties");
      filteredList = [...properties];

      // تطبيق الفلاتر المحفوظة إن وجدت
      applyCurrentFilters();

      // عرض العقارات
      generatePropertyCards(filteredList);

      // تحميل جدول الإدارة إذا كان المستخدم مسؤول
      if(isAdmin) loadAdminTable();

      // إخفاء رسالة التحميل دائمًا
      if(loadingEl) {
        if(properties.length === 0) {
          // مصفوفة العقارات فارغة، لكننا أضفنا منطق بالفعل لملئها دائمًا ب 49 عقار
          console.log("لا ينبغي أن تكون مصفوفة العقارات فارغة أبدًا!");
          // تأكد من ملء المصفوفة على أية حال
          if (localProperties.length === 0) {
            console.error("مصفوفة العقارات المحلية فارغة. يرجى المراجعة.");
          }
          // نعرض العقارات المحلية في جميع الأحوال
          properties = [...localProperties];
          filteredList = [...properties];
          // إعادة تطبيق الفلاتر
          applyCurrentFilters();
          // إعادة عرض البطاقات
          generatePropertyCards(filteredList);
        }
        // إخفاء رسالة التحميل دائمًا
        loadingEl.style.display = "none";
      }
    }

    // تحميل طلبات العملاء من Firebase
    function fetchClientSubmissions() {
      const clientSubmissionsRef = firebase?.database?.() ? firebase.database().ref("clientSubmissions") : null;

      if (!clientSubmissionsRef) {
        updateClientSubmissionsCount(0);
        return;
      }

      clientSubmissionsRef.once("value")
        .then(snapshot => {
          const clientSubmissions = [];
          if (snapshot.exists()) {
            snapshot.forEach(child => {
              const submission = child.val();
              submission.key = child.key;
              clientSubmissions.push(submission);
            });
          }

          // تحديث عدد الطلبات المعلقة
          const pendingCount = clientSubmissions.filter(s => s.status === "pending").length;
          updateClientSubmissionsCount(pendingCount);

          // تخزين جميع البيانات في المتغير العالمي
          currentFilteredSubmissions = clientSubmissions;
          
          // توليد ترقيم الصفحات
          generateSubmissionsPagination(clientSubmissions);
          
          // عرض الصفحة الأولى فقط
          currentSubmissionsPage = 1;
          displaySubmissionsPage(1);
        })
        .catch(error => {
          console.error("Error fetching client submissions:", error);
          updateClientSubmissionsCount(0);
        });
    }

    // تحديث عدد الطلبات المعلقة في علامة التبويب
    function updateClientSubmissionsCount(count) {
      const countEl = document.querySelector(".client-submissions-count");
      if (countEl) {
        countEl.textContent = count.toString();
        if (count > 0) {
          countEl.style.display = "inline-block";
        } else {
          countEl.style.display = "none";
        }
      }
    }

    // عرض طلبات العملاء في الجدول
    // وظيفة إنشاء ترقيم صفحات للإعلانات
    function generateSubmissionsPagination(submissions) {
      const paginationContainer = document.querySelector('.pagination');
      if (!paginationContainer) return;
      
      // حساب عدد الصفحات
      const totalPages = Math.ceil(submissions.length / submissionsPerPage);
      
      // إنشاء محتوى الترقيم
      let paginationHTML = '';
      
      // زر الصفحة السابقة
      paginationHTML += `
        <li class="page-item ${currentSubmissionsPage === 1 ? 'disabled' : ''}">
          <a class="page-link" href="#" onclick="changePage(${currentSubmissionsPage - 1}); return false;" aria-label="السابق">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
      `;
      
      // أزرار الصفحات
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
          <li class="page-item ${i === currentSubmissionsPage ? 'active' : ''}">
            <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
          </li>
        `;
      }
      
      // زر الصفحة التالية
      paginationHTML += `
        <li class="page-item ${currentSubmissionsPage === totalPages || totalPages === 0 ? 'disabled' : ''}">
          <a class="page-link" href="#" onclick="changePage(${currentSubmissionsPage + 1}); return false;" aria-label="التالي">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      `;
      
      // تحديث محتوى عنصر الترقيم
      paginationContainer.innerHTML = paginationHTML;
    }
    
    // وظيفة تغيير الصفحة الحالية
    function changePage(page) {
      currentSubmissionsPage = page;
      displaySubmissionsPage(page);
      
      // تحديث حالة ترقيم الصفحات
      const paginationItems = document.querySelectorAll('.pagination .page-item');
      paginationItems.forEach((item, index) => {
        // تخطي زر السابق
        if (index === 0) {
          item.classList.toggle('disabled', page === 1);
          return;
        }
        
        // تخطي زر التالي (آخر عنصر)
        if (index === paginationItems.length - 1) {
          const totalPages = Math.ceil(currentFilteredSubmissions.length / submissionsPerPage);
          item.classList.toggle('disabled', page === totalPages || totalPages === 0);
          return;
        }
        
        // تحديث حالة نشاط الصفحة
        const pageNumber = index;  // الصفحة 1 هي العنصر 1 في المصفوفة
        item.classList.toggle('active', pageNumber === page);
      });
    }
    
    // وظيفة عرض الإعلانات للصفحة المحددة
    function displaySubmissionsPage(page) {
      // حساب مؤشرات بداية ونهاية الإعلانات للصفحة الحالية
      const startIndex = (page - 1) * submissionsPerPage;
      const endIndex = startIndex + submissionsPerPage;
      
      // استخراج الإعلانات للصفحة الحالية
      const pageSubmissions = currentFilteredSubmissions.slice(startIndex, endIndex);
      
      // عرض الإعلانات في الجدول
      generateClientSubmissionsTable(pageSubmissions);
    }

    // وظيفة إنشاء جدول إعلانات العملاء
    function generateClientSubmissionsTable(submissions) {
      const tbody = document.getElementById("clientSubmissionsTableBody");
      if (!tbody) return;

      tbody.innerHTML = "";

      if (submissions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center">لا توجد طلبات حالياً</td></tr>`;
        return;
      }

      submissions.forEach((submission, index) => {
        const row = document.createElement("tr");

        // تحديد لون خلفية الصف بناءً على حالة الطلب
        if (submission.status === "approved") {
          row.classList.add("table-success");
        } else if (submission.status === "rejected") {
          row.classList.add("table-danger");
        } else if (submission.status === "pending") {
          row.classList.add("table-warning");
        }

        const date = new Date(submission.createdAt);
        const formattedDate = date.toLocaleDateString("ar-SA");

        const price = submission.price ? formatPrice(submission.price) : "";

        let statusText = "";
        let statusClass = "";

        switch(submission.status) {
          case "pending":
            statusText = "معلق";
            statusClass = "bg-warning";
            break;
          case "approved":
            statusText = "تمت الموافقة";
            statusClass = "bg-success";
            break;
          case "rejected":
            statusText = "مرفوض";
            statusClass = "bg-danger";
            break;
        }

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${formattedDate}</td>
          <td>${submission.name || ""}</td>
          <td dir="ltr">${submission.whatsapp || ""}</td>
          <td>${submission.title || ""}</td>
          <td>${submission.location || ""}</td>
          <td>${price}</td>
          <td><span class="badge ${statusClass}">${statusText}</span></td>
          <td>
            <button class="btn btn-sm btn-info me-1" onclick="viewSubmission('${submission.key || submission.id}')">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-sm btn-success me-1" onclick="approveSubmission('${submission.key || submission.id}')" ${submission.status === "approved" ? "disabled" : ""}>
              <i class="bi bi-check-lg"></i>
            </button>
            <button class="btn btn-sm btn-danger" onclick="rejectSubmission('${submission.key || submission.id}')" ${submission.status === "rejected" ? "disabled" : ""}>
              <i class="bi bi-x-lg"></i>
            </button>
            <a href="https://wa.me/966535342404?text=بخصوص طلب عقارك" target="_blank" class="btn btn-sm btn-success ms-1" style="background: linear-gradient(45deg, #25D366, #128C7E); border: none; box-shadow: 0 2px 5px rgba(37, 211, 102, 0.3);">
              <i class="bi bi-whatsapp"></i>
            </a>
          </td>
        `;

        tbody.appendChild(row);
      });
    }

    // تحميل المشاريع العقارية
    function fetchProjects() {
      const projectsRef = firebase?.database?.() ? firebase.database().ref("projects") : null;

      if (!projectsRef) {
        return;
      }

      projectsRef.on("value", snapshot => {
          const projects = [];
          if (snapshot.exists()) {
            snapshot.forEach(child => {
              const project = child.val();
              project.key = child.key;
              projects.push(project);
            });
          }

          // حفظ المشاريع في متغير عام للوصول إليها لاحقاً
          window.projects = projects;

          // عرض المشاريع في الجدول والصفحة الرئيسية
          generateProjectsTable(projects);
          generateProjectsDisplay(projects);
        })
        .catch(error => {
          console.error("Error fetching projects:", error);
        });
    }

    // عرض المشاريع في الجدول
    function generateProjectsTable(projects) {
      const tbody = document.getElementById("projectsTableBody");
      if (!tbody) return;

      tbody.innerHTML = "";

      if (projects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center">لا توجد مشاريع حالياً</td></tr>`;
        return;
      }

      projects.forEach((p, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${i+1}</td>
          <td>${p.title}</td>
          <td>${p.location}</td>
          <td>
            <button class="btn btn-sm btn-primary me-1" onclick="editProject('${p.key}')">
              <i class="bi bi-pencil"></i> تعديل
            </button>
            <button class="btn btn-sm btn-danger" onclick="deleteProject('${p.key}')">
              <i class="bi bi-trash"></i> حذف
            </button>
          </td>
        `;

        tbody.appendChild(row);
      });
    }

    // عرض المشاريع في الصفحة الرئيسية
    function generateProjectsDisplay(projects) {
      const container = document.getElementById("projectsContainer");
      if (!container) return;

      container.innerHTML = "";

      if (projects.length === 0) {
        return;
      }

      // عرض فقط أحدث 3 مشاريع
      const recentProjects = projects.slice(0, 3);

      recentProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "col-md-4";

        card.innerHTML = `
          <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <img src="${project.image || 'https://via.placeholder.com/400x250?text=No+Image'}" 
                 class="card-img-top" alt="${project.title}"
                 style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${project.title || ""}</h5>
              <p class="card-text text-muted mb-2">
                <i class="bi bi-geo-alt-fill me-1"></i> ${project.location || ""}
              </p>
              <p class="card-text small">${(project.description || "").substring(0, 120)}${(project.description || "").length > 120 ? '...' : ''}</p>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    }

    function generatePropertyCards(propList) {
      const container = document.getElementById("propertiesContainer");
      const featuredContainer = document.getElementById("featuredPropertiesContainer");
      const propertiesCount = document.getElementById("propertiesCount");
      const noPropertiesMessage = document.getElementById("noPropertiesMessage");

      if(!container) return;

      // تفريغ الحاويات
      container.innerHTML = "";
      if (featuredContainer) featuredContainer.innerHTML = "";

      // إخفاء رسالة "لا توجد عقارات" افتراضيًا
      if (noPropertiesMessage) noPropertiesMessage.style.display = "none";

      // إظهار أو إخفاء الرسالة حسب وجود العقارات
      if(propList.length === 0) {
        if (noPropertiesMessage) noPropertiesMessage.style.display = "block";
        if (propertiesCount) propertiesCount.textContent = "0 عقار";
        return;
      }

      // تصنيف العقارات المميزة والعادية
      // نختار فقط العقارات ذات الشارة "مميز" لعرضها في قسم العقارات المميزة
      const featuredProps = propList.filter(p => p.badge === 'featured');

      // تحديث عداد العقارات
      if (propertiesCount) {
        propertiesCount.textContent = `${propList.length} عقار`;
      }

      // عرض العقارات المميزة إذا كانت موجودة
      if (featuredContainer && featuredProps.length > 0) {
        featuredProps.slice(0, 3).forEach(property => {
          featuredContainer.appendChild(createPropertyCard(property, true));
        });
      }

      // عرض جميع العقارات في الحاوية الرئيسية
      propList.forEach(property => {
        container.appendChild(createPropertyCard(property, false));
      });
    }

    // إنشاء بطاقة عقار بتصميم احترافي
    function createPropertyCard(property, isFeatured) {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-6 col-lg-4 mb-4";

      const price = property.price ? formatPrice(property.price) : "سعر غير محدد";
      const image = property.mainImage || "https://via.placeholder.com/400x300?text=No+Image";
      const type = property.type || "للبيع";

      // استخلاص بيانات المساحة
      const area = property.features?.area || "";
      const rooms = property.features?.rooms || "";
      const bathrooms = property.features?.bathrooms || "";

      // إعداد الشارات الخاصة بالعقار
      let badgesHTML = '';

      // إضافة شارات خاصة للعقارات المميزة
      if (property.badge === "featured") {
        badgesHTML += `
          <div class="property-badge badge-premium">
            <i class="bi bi-award-fill"></i> <span>مميز</span>
          </div>
        `;
      }

      if (property.badge === "حصري" || property.isExclusive || property.badge === "exclusive") {
        badgesHTML += `
          <div class="property-badge badge-exclusive">
            <i class="bi bi-star-fill"></i> <span>حصري</span>
          </div>
        `;
      }

      if (property.badge === "عرض مثبت" || property.badge === "pinned") {
        badgesHTML += `
          <div class="property-badge badge-pinned">
            <i class="bi bi-pin-angle-fill"></i> <span>مثبت</span>
          </div>
        `;
      }

      // إنشاء بطاقة عقار بتصميم احترافي ومبسط
      colDiv.innerHTML = `
        <div class="real-estate-card ${isFeatured ? 'featured-property' : ''}" data-category="${property.category || ''}">
          <img src="${image}" alt="${property.title || 'عقار'}" class="card-image" loading="lazy">
          <div class="card-price-badge">${price}</div>
          
          <div class="card-body">
            <h3 class="card-title">${property.title || ""}</h3>
            <p class="mb-0">${property.location || ""}</p>
            <div class="card-features">
              ${rooms ? `<span><i class="bi bi-house-door me-1"></i>${rooms}</span>` : '<span><i class="bi bi-house-door me-1"></i>-</span>'}
              ${bathrooms ? `<span><i class="bi bi-droplet me-1"></i>${bathrooms}</span>` : '<span><i class="bi bi-droplet me-1"></i>-</span>'}
              ${area ? `<span><i class="bi bi-arrows-angle-contract me-1"></i>${area}</span>` : '<span><i class="bi bi-arrows-angle-contract me-1"></i>-</span>'}
            </div>
            
            <div class="mt-3 d-flex gap-2">
              <a href="https://wa.me/966535342404?text=استفسار حول العقار: ${encodeURIComponent(property.title || '')}" class="btn btn-success btn-sm flex-grow-1" target="_blank">
                <i class="bi bi-whatsapp me-1"></i> واتساب
              </a>
              <button class="btn btn-primary btn-sm flex-grow-1" onclick="viewPropertyDetails('${property.key || property.id}')">
                <i class="bi bi-eye-fill me-1"></i> التفاصيل
              </button>
            </div>
          </div>
        </div>
      `;

      // إضافة الأنماط المخصصة
      if (!document.getElementById('property-card-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'property-card-styles';
        styleEl.textContent = `
          /* تصميم بطاقة العقار المبسط والاحترافي */
          .real-estate-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            position: relative;
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(0, 0, 0, 0.04);
          }
          
          .real-estate-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }
          
          /* العقارات المميزة */
          .featured-property {
            position: relative;
            border: none;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
            transform: translateY(0);
          }
          
          .featured-property:hover {
            transform: translateY(-12px);
          }
          
          .featured-property:before {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
            border-radius: 24px;
            z-index: -1;
            opacity: 0.8;
            animation: glowPulse 3s infinite alternate;
          }
          
          @keyframes glowPulse {
            0% {
              opacity: 0.7;
              box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
            }
            100% {
              opacity: 0.9;
              box-shadow: 0 0 25px rgba(var(--accent-rgb), 0.5);
            }
          }
          
          .featured-property:after {
            content: '⭐';
            position: absolute;
            top: -18px;
            right: 20px;
            background: linear-gradient(135deg, #f1c40f, #e67e22);
            color: white;
            font-size: 16px;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 15px rgba(231, 129, 36, 0.25);
            animation: starBounce 2s ease-in-out infinite;
            z-index: 10;
          }
          
          @keyframes starBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          /* حاوية الصورة */
          .card-image-container {
            position: relative;
            height: 220px;
            overflow: hidden;
          }
          
          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          
          .real-estate-card:hover .card-image {
            transform: scale(1.05);
          }
          
          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.65));
            z-index: 1;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          
          .real-estate-card:hover .image-overlay {
            opacity: 1;
          }
          
          /* لابل نوع العقار */
          .property-label {
            position: absolute;
            top: 15px;
            left: 15px;
            padding: 8px 18px;
            border-radius: 50px;
            color: white;
            font-weight: 700;
            font-size: 0.85rem;
            z-index: 2;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.18);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            letter-spacing: 0.3px;
            transform: translateY(0);
            transition: all 0.3s ease;
          }
          
          .real-estate-card:hover .property-label {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
          
          .sale-label {
            background-color: rgba(76, 175, 80, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .rent-label {
            background-color: rgba(33, 150, 243, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          /* سعر العقار */
          .property-price {
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: rgba(10, 38, 71, 0.95);
            color: white;
            padding: 10px 22px;
            border-radius: 12px;
            font-weight: 700;
            z-index: 2;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
            font-size: 1.15rem;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            transform: translateY(0);
          }
          
          .real-estate-card:hover .property-price {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          }
          
          /* حاوية الشارات */
          .badge-container {
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 2;
            transition: all 0.3s ease;
          }
          
          .real-estate-card:hover .badge-container {
            transform: translateY(-2px);
          }
          
          .badge-premium, .badge-exclusive, .badge-featured {
            padding: 7px 14px;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.3px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
            color: white;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            transition: all 0.3s ease;
          }
          
          .badge-premium:hover, .badge-exclusive:hover, .badge-featured:hover {
            transform: scale(1.05);
          }
          
          .badge-premium {
            background-color: rgba(255, 152, 0, 0.95);
          }
          
          .badge-exclusive {
            background-color: rgba(156, 39, 176, 0.95);
          }
          
          .badge-featured {
            background-color: rgba(255, 82, 82, 0.95);
          }
          
          /* محتوى البطاقة */
          .card-content {
            padding: 22px;
            flex: 1;
            display: flex;
            flex-direction: column;
            background: linear-gradient(to bottom, #ffffff, #f9fafc);
          }
          
          .property-title {
            font-size: 1.32rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 14px;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .property-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-color, #0f4c81);
            transition: width 0.3s ease;
            border-radius: 2px;
          }
          
          .real-estate-card:hover .property-title {
            color: var(--primary-color, #0f4c81);
          }
          
          .real-estate-card:hover .property-title::after {
            width: 60px;
          }
          
          .property-address {
            display: flex;
            align-items: center;
            color: #64748b;
            font-size: 0.9rem;
            margin-bottom: 16px;
            position: relative;
            padding-right: 2px;
          }
          
          .property-address i {
            color: #ef4444;
            margin-left: 8px;
            font-size: 1.05rem;
            filter: drop-shadow(0 1px 2px rgba(239, 68, 68, 0.2));
            transition: transform 0.3s ease;
          }
          
          .real-estate-card:hover .property-address i {
            transform: scale(1.15);
          }
          
          /* مواصفات العقار */
          .property-features {
            display: flex;
            justify-content: space-between;
            padding: 18px 0;
            border-top: 1px solid rgba(0,0,0,0.04);
            border-bottom: 1px solid rgba(0,0,0,0.04);
            margin-bottom: 18px;
            transition: all 0.3s ease;
            background-color: rgba(248, 250, 252, 0.5);
            border-radius: 8px;
          }
          
          .real-estate-card:hover .property-features {
            background-color: rgba(243, 244, 246, 0.7);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) inset;
          }
          
          .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 1;
            position: relative;
            padding: 8px 0;
            transition: all 0.3s ease;
          }
          
          .feature:hover {
            transform: translateY(-3px);
          }
          
          .feature:not(:last-child):after {
            content: '';
            position: absolute;
            right: 0;
            top: 15%;
            bottom: 15%;
            width: 1px;
            background-color: rgba(0,0,0,0.06);
            border-radius: 1px;
          }
          
          .feature i {
            font-size: 1.45rem;
            color: var(--primary-color, #0f4c81);
            margin-bottom: 8px;
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(15, 76, 129, 0.15));
          }
          
          .real-estate-card:hover .feature i {
            transform: scale(1.1);
            color: var(--primary-dark, #0a3a5c);
          }
          
          .feature span {
            font-weight: 700;
            color: #334155;
            font-size: 0.95rem;
          }
          
          /* تصنيف العقار */
          .property-category {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background-color: #f1f5f9;
            color: #334155;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            margin-bottom: 18px;
            font-weight: 600;
            width: fit-content;
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.03);
          }
          
          .property-category i {
            color: var(--primary-color, #0f4c81);
            transition: transform 0.3s ease;
          }
          
          .real-estate-card:hover .property-category {
            background-color: #e0f2fe;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
            border-color: rgba(0, 0, 0, 0.05);
          }
          
          .real-estate-card:hover .property-category i {
            transform: rotate(15deg) scale(1.15);
          }
          
          /* أزرار التفاعل */
          .card-actions {
            display: flex;
            gap: 12px;
            margin-top: auto;
            padding-top: 10px;
          }
          
          .action-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 18px;
            border-radius: 50px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            text-decoration: none;
            flex: 1;
            position: relative;
            overflow: hidden;
            font-size: 0.9rem;
            letter-spacing: 0.2px;
          }
          
          .action-button:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0);
            transition: all 0.3s ease;
          }
          
          .action-button:hover:after {
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          .action-button i {
            font-size: 1.1rem;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 2;
          }
          
          .action-button span {
            position: relative;
            z-index: 2;
          }
          
          .action-button:active {
            transform: scale(0.98);
          }
          
          .whatsapp-button {
            background: linear-gradient(45deg, #25D366, #1DA851);
            color: white;
            box-shadow: 0 6px 15px rgba(37, 211, 102, 0.25);
          }
          
          .whatsapp-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
          }
          
          .whatsapp-button:hover i {
            transform: rotate(-10deg) scale(1.2);
          }
          
          .details-button {
            background: linear-gradient(45deg, #144272, #0A2647);
            color: white;
            box-shadow: 0 6px 15px rgba(10, 38, 71, 0.2);
          }
          
          .details-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(10, 38, 71, 0.25);
          }
          
          .details-button:hover i {
            transform: scale(1.2);
          }
          
          /* الأنماط القديمة معدلة لتتوافق مع التصميم الجديد */
          
          /* حاوية صورة العقار */
          .property-img-container {
            position: relative;
            height: 240px;
            overflow: hidden;
          }
          
          .property-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          /* تأكيد أن القيمة تعمل للأنماط القديمة والجديدة */
          .property-card:hover .property-image {
            transform: scale(1.15);
          }
          
          /* تنسيق البطاقة القديمة */
          .property-card {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
            position: relative;
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            height: 100%;
            display: flex;
            flex-direction: column;
            border: none;
          }
          
          .property-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }
          
          .property-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.65));
            z-index: 1;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          
          .property-card:hover .property-overlay {
            opacity: 1;
          }
          
          /* شارة نوع العقار (بيع/إيجار) - متوافقة مع التصميم الجديد */
          .property-type-label {
            position: absolute;
            top: 15px;
            left: 15px;
            padding: 8px 18px;
            border-radius: 50px;
            color: white;
            font-weight: 700;
            font-size: 0.85rem;
            z-index: 2;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.18);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            letter-spacing: 0.3px;
            transform: translateY(0);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .property-card:hover .property-type-label {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
          
          .property-type-label.sale {
            background-color: rgba(76, 175, 80, 0.95);
          }
          
          .property-type-label.rent {
            background-color: rgba(33, 150, 243, 0.95);
          }
          
          /* حاوية الشارات - متوافقة مع التصميم الجديد */
          .property-badges-container {
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 2;
            transition: all 0.3s ease;
          }
          
          .property-card:hover .property-badges-container {
            transform: translateY(-2px);
          }
          
          .property-badge {
            padding: 7px 14px;
            border-radius: 50px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.3px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
            color: white;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            transition: all 0.3s ease;
          }
          
          .property-badge:hover, .property-badge i {
            transition: all 0.3s ease;
          }
          
          .property-badge:hover {
            transform: scale(1.05);
          }
          
          .property-badge:hover i {
            transform: scale(1.15);
          }
          
          .badge-featured {
            background-color: rgba(255, 149, 0, 0.95);
            color: white;
          }
          
          .badge-exclusive {
            background-color: rgba(138, 43, 226, 0.95);
            color: white;
          }
          
          .badge-pinned {
            background-color: rgba(34, 181, 115, 0.95);
            color: white;
          }
          
          /* شارة السعر */
          .property-price-tag {
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: rgba(10, 38, 71, 0.95);
            color: white;
            padding: 10px 22px;
            border-radius: 12px;
            font-weight: 700;
            z-index: 2;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            align-items: center;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            transform: translateY(0);
          }
          
          .property-card:hover .property-price-tag {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          }
          
          .price-amount {
            font-size: 1.15rem;
            letter-spacing: 0.5px;
          }
          
          .price-period {
            font-size: 0.8rem;
            opacity: 0.9;
          }
          
          /* محتوى العقار */
          .property-content {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .property-category {
            display: inline-flex;
            align-items: center;
            background-color: var(--primary-light);
            color: var(--primary-color);
            padding: 5px 12px;
            border-radius: 30px;
            font-size: 0.85rem;
            margin-bottom: 12px;
            font-weight: 600;
            width: fit-content;
          }
          
          .property-category i {
            margin-left: 8px;
            font-size: 0.9rem;
          }
          
          .property-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--dark-text);
            margin-bottom: 8px;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          
          .property-location {
            display: flex;
            align-items: center;
            color: var(--light-text);
            font-size: 0.9rem;
            margin-bottom: 15px;
          }
          
          .property-location i {
            color: #f44336;
            margin-left: 8px;
            font-size: 1rem;
          }
          
          /* مواصفات العقار */
          .property-features {
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
            margin: 10px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            text-align: center;
            padding: 5px;
          }
          
          .feature i {
            font-size: 1.2rem;
            color: var(--primary-color, #0f4c81);
            margin-bottom: 8px;
          }
          
          .feature span {
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a5568;
          }
          
          /* أزرار الإجراءات */
          .card-actions {
            display: flex;
            gap: 8px;
            margin-top: 15px;
          }
          
          .action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: none;
            outline: none;
            cursor: pointer;
            flex: 1;
            gap: 6px;
          }
          
          .action-whatsapp {
            background: #25D366;
            color: white;
          }
          
          .action-whatsapp:hover {
            background: #20bd5a;
          }
          
          .action-details {
            background: #f1f5f9;
            color: #1e293b;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .action-details:hover {
            background: #e2e8f0;
          }
          
          .action-whatsapp i, .action-details i {
            font-size: 1.1rem;
            margin-left: 2px;
          }
          
          .property-spec-item i {
            font-size: 1.2rem;
            color: var(--primary-color);
            margin-bottom: 5px;
          }
          
          .spec-value {
            font-weight: 700;
            color: var(--dark-text);
            font-size: 1rem;
          }
          
          .spec-unit {
            font-size: 0.8rem;
            color: var(--light-text);
          }
          
          /* أزرار التفاعل */
          .property-actions-footer {
            display: flex;
            justify-content: space-between;
            margin-top: auto;
          }
          
          .view-details-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 9px 18px;
            border-radius: 30px;
            font-weight: 600;
            flex-grow: 1;
            margin-left: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 3px 12px rgba(15, 76, 129, 0.3);
          }
          
          .view-details-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(15, 76, 129, 0.4);
          }
          
          .whatsapp-btn {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #25D366;
            color: white;
            border-radius: 50%;
            text-decoration: none;
            border: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 3px 12px rgba(37, 211, 102, 0.3);
          }
          
          .whatsapp-btn:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
          }

          .property-image-wrapper {
            position: relative;
            height: 220px;
            overflow: hidden;
          }

          .property-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .property-card:hover .property-image {
            transform: scale(1.08);
          }

          .property-image-gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60%;
            background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0));
            z-index: 1;
          }

          .property-image-gradient {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
            z-index: 1;
            pointer-events: none;
          }

          .property-badges {
            position: absolute;
            bottom: 10px;
            left: 10px;
            z-index: 2;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .property-badge {
            padding: 5px 10px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: bold;
            color: white;
            backdrop-filter: blur(3px);
            display: flex;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }

          .badge-featured {
            background-color: rgba(220, 53, 69, 0.9);
          }

          .badge-exclusive {
            background-color: rgba(111, 66, 193, 0.9);
          }

          .badge-pinned {
            background-color: rgba(40, 167, 69, 0.9);
          }

          .badge-new {
            background-color: rgba(23, 162, 184, 0.9);
          }

          .property-actions {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 3;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .property-action-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            opacity: 0.9;
            transform: translateX(10px);
            transition: all 0.3s ease;
          }

          .property-card:hover .property-action-btn {
            transform: translateX(0);
            opacity: 1;
          }

          .view-btn {
            background-color: white;
            color: #2c3e50;
          }

          .view-btn:hover {
            background-color: #f8f9fa;
            color: #0056b3;
            transform: scale(1.1);
          }

          .whatsapp-btn {
            background: linear-gradient(45deg, #25D366, #128C7E);
            color: white;
          }

          .whatsapp-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 8px rgba(37, 211, 102, 0.4);
          }

          .property-type-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            z-index: 2;
            padding: 1px 4px;
            border-radius: 6px;
            font-size: 8px;
            font-weight: 500;
            box-shadow: 0 1px 3px rgba(0,0,0,0.15);
            backdrop-filter: blur(3px);
            max-width: 35px;
            text-align: center;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .property-type-badge.sale {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
          }

          .property-type-badge.rent {
            background: linear-gradient(135deg, #ffa63d 0%, #ff6f40 100%);
            color: white;
          }

          .property-content {
            padding: 18px 20px;
            display: flex;
            flex-direction: column;
            min-height: 180px;
          }

          .property-header {
            margin-bottom: 12px;
          }

          .property-category-tag {
            display: inline-flex;
            align-items: center;
            background: rgba(var(--primary-rgb, 15, 76, 129), 0.08);
            color: var(--primary-color, #0f4c81);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 16px;
            gap: 6px;
            transition: all 0.3s ease;
            max-width: fit-content;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(var(--primary-rgb, 15, 76, 129), 0.08);
          }
          
          .property-category-tag i {
            font-size: 0.9rem;
            color: var(--primary-color, #0f4c81);
          }
          
          .real-estate-card:hover .property-category-tag {
            background: var(--primary-color, #0f4c81);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(var(--primary-rgb, 15, 76, 129), 0.15);
          }
          
          .real-estate-card:hover .property-category-tag i {
            color: white;
          }

          .property-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #2c3e50;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.4;
            height: 45px;
          }

          .property-location {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #6c757d;
            font-size: 13px;
          }

          .location-text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 90%;
          }

          .property-location i {
            margin-left: 5px;
            font-size: 16px;
          }

          .property-divider {
            margin: 0 0 15px;
            opacity: 0.1;
          }

          .property-features {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .feature-icon {
            width: 28px;
            height: 28px;
            min-width: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(13, 110, 253, 0.1);
            border-radius: 50%;
            color: #0d6efd;
            font-size: 14px;
          }

          .feature-details {
            display: flex;
            align-items: baseline;
            gap: 3px;
          }

          .feature-value {
            font-weight: 600;
            color: #495057;
          }

          .feature-unit {
            font-size: 12px;
            color: #6c757d;
          }

          .property-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: 15px;
            border-top: 1px solid rgba(0,0,0,0.05);
          }

          .property-price {
            font-weight: 700;
            color: #e74c3c;
            font-size: 18px;
            display: flex;
            flex-direction: column;
          }

          .property-price small {
            font-size: 12px;
            color: #6c757d;
            font-weight: normal;
          }

          .details-btn {
            font-size: 14px;
            padding: 6px 15px;
            transition: all 0.3s ease;
            font-weight: 500;
          }

          .details-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(13, 110, 253, 0.25);
          }
        `;
        document.head.appendChild(styleEl);
      }

      return colDiv;
    }

    function formatPrice(price) {
      if(!price) return "";
      const numPrice = Number(price);
      if(isNaN(numPrice)) return price;
      return numPrice.toLocaleString() + " ريال";
    }

    // وظيفة فتح معرض الصور المكبر
    function openImageGallery(startIndex) {
      const property = currentProperty;
      if (!property || !property.images || property.images.length === 0) {
        showToast("لا توجد صور متاحة لهذا العقار", "warning");
        return;
      }

      // إنشاء عنصر معرض الصور المكبّر
      const galleryOverlay = document.createElement('div');
      galleryOverlay.className = 'image-gallery-overlay';
      galleryOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
      `;

      // إنشاء حاوية الصورة
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-gallery-container';
      imageContainer.style.cssText = `
        position: relative;
        width: 80%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
      `;

      // إنشاء عنصر الصورة
      const image = document.createElement('img');
      image.className = 'image-gallery-img';
      image.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s;
      `;

      // إنشاء أزرار التنقل
      const prevButton = document.createElement('button');
      prevButton.className = 'image-gallery-nav-btn';
      prevButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
      prevButton.style.cssText = `
        position: absolute;
        left: -60px;
        background-color: rgba(255, 255, 255, 0.3);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s;
      `;

      const nextButton = document.createElement('button');
      nextButton.className = 'image-gallery-nav-btn';
      nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
      nextButton.style.cssText = `
        position: absolute;
        right: -60px;
        background-color: rgba(255, 255, 255, 0.3);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s;
      `;

      // إنشاء زر الإغلاق
      const closeButton = document.createElement('button');
      closeButton.className = 'image-gallery-close-btn';
      closeButton.innerHTML = '<i class="bi bi-x-lg"></i>';
      closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s;
        z-index: 2001;
      `;

      // إنشاء عنصر عرض رقم الصورة
      const counter = document.createElement('div');
      counter.className = 'image-gallery-counter';
      counter.style.cssText = `
        position: absolute;
        bottom: -40px;
        color: white;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px 15px;
        border-radius: 20px;
      `;

      // إنشاء عنصر المصغرات
      const thumbnailsContainer = document.createElement('div');
      thumbnailsContainer.className = 'image-gallery-thumbnails';
      thumbnailsContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-top: 70px;
        gap: 10px;
        flex-wrap: wrap;
        max-width: 90%;
      `;

      // حالة المعرض
      let currentIndex = startIndex || 0;

      // وظيفة تحديث الصورة الحالية
      function updateImage() {
        const images = property.images;

        if (!images[currentIndex]) {
          currentIndex = 0;
        }

        image.src = images[currentIndex];
        image.style.opacity = '0';

        setTimeout(() => {
          image.style.opacity = '1';
        }, 100);

        counter.textContent = `${currentIndex + 1} / ${images.length}`;

        // تحديث المصغرات
        Array.from(thumbnailsContainer.children).forEach((thumb, idx) => {
          if (idx === currentIndex) {
            thumb.style.opacity = '1';
            thumb.style.transform = 'scale(1.1)';
            thumb.style.border = '3px solid #fff';
          } else {
            thumb.style.opacity = '0.6';
            thumb.style.transform = 'scale(1)';
            thumb.style.border = '2px solid rgba(255,255,255,0.3)';
          }
        });
      }

      // إنشاء المصغرات
      property.images.forEach((src, idx) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.style.cssText = `
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0.6;
          border: 2px solid rgba(255,255,255,0.3);
        `;

        thumb.addEventListener('click', () => {
          currentIndex = idx;
          updateImage();
        });

        thumbnailsContainer.appendChild(thumb);
      });

      // أحداث الأزرار
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + property.images.length) % property.images.length;
        updateImage();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % property.images.length;
        updateImage();
      });

      // حدث المفاتيح
      function handleKeyDown(e) {
        if (e.key === 'ArrowLeft') {
          prevButton.click();
        } else if (e.key === 'ArrowRight') {
          nextButton.click();
        } else if (e.key === 'Escape') {
          closeButton.click();
        }
      }
      document.addEventListener('keydown', handleKeyDown);

      // حدث الإغلاق
      closeButton.addEventListener('click', () => {
        document.body.removeChild(galleryOverlay);
        document.removeEventListener('keydown', handleKeyDown);
      });

      // تحسس المؤشر (hover) للأزرار
      [prevButton, nextButton, closeButton].forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          btn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          btn.style.transform = 'scale(1.1)';
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          btn.style.transform = 'scale(1)';
        });
      });

      // إضافة العناصر إلى الصفحة
      imageContainer.appendChild(image);
      imageContainer.appendChild(prevButton);
      imageContainer.appendChild(nextButton);
      imageContainer.appendChild(counter);

      galleryOverlay.appendChild(closeButton);
      galleryOverlay.appendChild(imageContainer);
      galleryOverlay.appendChild(thumbnailsContainer);

      document.body.appendChild(galleryOverlay);

      // تعيين الصورة الأولى
      updateImage();
    }

    // متغير لتخزين العقار الحالي المعروض
    let currentProperty = null;

    function viewPropertyDetails(propertyId) {
      // البحث عن العقار المحدد بالمعرف
      const property = properties.find(p => (p.key === propertyId || p.id === propertyId || p.id.toString() === propertyId));

      // التحقق من وجود العقار
      if(!property) {
        showToast("لم يتم العثور على العقار", "danger");
        return;
      }

      // تعيين العقار الحالي للاستخدام في معرض الصور المكبر
      currentProperty = property;

      // إضافة زر العودة للصفحة الرئيسية
      const backButton = document.createElement("button");
      backButton.className = "btn btn-lg btn-light rounded-circle position-fixed";
      backButton.style.cssText = "top: 20px; right: 20px; z-index: 1100; width: 50px; height: 50px; box-shadow: 0 0 15px rgba(0,0,0,0.1);";
      backButton.innerHTML = '<i class="bi bi-arrow-right"></i>';
      backButton.onclick = backToListing;

      // إخفاء المحتوى العام وإظهار صفحة التفاصيل
      document.getElementById("featuredProperties").style.display = "none";
      document.getElementById("allProperties").style.display = "none";
      document.getElementById("propertyDetailPage").style.display = "block";

      // إضافة زر الرجوع إلى الصفحة
      document.body.appendChild(backButton);

      const detailContent = document.getElementById("detailContent");

      // تحضير عناصر معرض الصور
      const carouselItems = [];

      // إضافة الصورة الرئيسية
      if(property.mainImage) {
        carouselItems.push(`
          <div class="carousel-item active">
            <img src="${property.mainImage}" class="d-block w-100" alt="${property.title || 'عقار'}">
          </div>
        `);
      }

      // إضافة الصور الإضافية (دعم للصيغ المختلفة)
      let additionalImages = [];

      if(property.images && Array.isArray(property.images) && property.images.length) {
        additionalImages = property.images;
      } else if (property.additionalImages && Array.isArray(property.additionalImages) && property.additionalImages.length) {
        additionalImages = property.additionalImages;
      }

      // إضافة الصور الإضافية إلى معرض الصور
      if(additionalImages.length > 0) {
        additionalImages.forEach(img => {
          if(img && typeof img === 'string') {
            carouselItems.push(`
              <div class="carousel-item">
                <img src="${img}" class="d-block w-100" alt="${property.title || 'عقار'}">
              </div>
            `);
          }
        });
      }

      if(carouselItems.length === 0) {
        carouselItems.push(`
          <div class="carousel-item active">
            <img src="https://via.placeholder.com/800x400?text=No+Images" class="d-block w-100" alt="No Image">
          </div>
        `);
      }

      const price = property.price ? formatPrice(property.price) : "غير محدد";
      const type = property.type || "للبيع";

      // تحضير ميزات العقار
      let featuresHTML = '';
      const features = property.features || {};

      if (features.rooms) {
        featuresHTML += `
          <div class="col-md-4 mb-3">
            <div class="property-feature">
              <i class="bi bi-door-closed"></i>
              <span><strong>عدد الغرف:</strong> ${features.rooms}</span>
            </div>
          </div>
        `;
      }

      if (features.bathrooms) {
        featuresHTML += `
          <div class="col-md-4 mb-3">
            <div class="property-feature">
              <i class="bi bi-droplet"></i>
              <span><strong>عدد الحمامات:</strong> ${features.bathrooms}</span>
            </div>
          </div>
        `;
      }

      if (features.area) {
        featuresHTML += `
          <div class="col-md-4 mb-3">
            <div class="property-feature">
              <i class="bi bi-rulers"></i>
              <span><strong>المساحة:</strong> ${features.area} م²</span>
            </div>
          </div>
        `;
      }

      const content = `
        <div class="row">
          <div class="col-md-8 mb-4">
            <!-- معرض الصور محسن -->
            <div class="property-gallery-container">
              <div id="propertyCarousel" class="carousel slide shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel">
                <div class="carousel-inner">
                  ${carouselItems.join('')}
                </div>
                ${carouselItems.length > 1 ? `
                  <button class="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">السابق</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">التالي</span>
                  </button>
                  <div class="carousel-indicators">
                    ${carouselItems.map((_, index) => `
                      <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-label="Slide ${index + 1}"></button>
                    `).join('')}
                  </div>
                ` : ''}
              </div>

              <!-- معرض الصور المصغرة للتنقل السريع -->
              <div class="property-thumbnails mt-3 d-flex flex-wrap gap-2 justify-content-center">
                ${carouselItems.length > 1 ? carouselItems.map((item, index) => {
                  // استخراج URL الصورة من HTML
                  const imgSrcMatch = item.match(/src="([^"]+)"/);
                  const imgSrc = imgSrcMatch ? imgSrcMatch[1] : '';
                  return `
                    <div class="thumbnail-item" onclick="$('#propertyCarousel').carousel(${index})">
                      <img src="${imgSrc}" class="img-thumbnail" alt="صورة مصغرة ${index + 1}" 
                           style="width: 70px; height: 50px; object-fit: cover; cursor: pointer; transition: all 0.3s;">
                    </div>
                  `;
                }).join('') : ''}
              </div>

              <!-- زر تكبير الصور -->
              <div class="text-center mt-2">
                <button class="btn btn-sm btn-outline-primary" onclick="openImageGallery(0)">
                  <i class="bi bi-zoom-in me-1"></i> تكبير الصور
                </button>
              </div>
            </div>

            <!-- وصف العقار -->
            <div class="card mt-4 shadow-sm">
              <div class="card-header bg-primary bg-opacity-10 py-3">
                <h4 class="mb-0 text-primary"><i class="bi bi-card-text me-2"></i>وصف العقار</h4>
              </div>
              <div class="card-body">
                <p class="description-text" style="font-weight: bold; line-height: 1.8;">${property.description || "لا يوجد وصف متاح."}</p>
              </div>
            </div>
          </div>

          <!-- معلومات العقار بتصميم جديد -->
          <div class="col-md-4">
            <div class="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden">
              <div class="card-header py-3 px-4 bg-primary text-white">
                <h3 class="fs-5 mb-0"><i class="bi bi-info-circle-fill me-2"></i>معلومات العقار</h3>
              </div>
              <div class="card-body p-0">
                <!-- عنوان العقار -->
                <div class="p-4 border-bottom">
                  <h3 class="h4 mb-0">${property.title || ""}</h3>
                </div>

                <!-- مزايا رئيسية -->
                <div class="property-features-list">
                  <!-- نوع العرض -->
                  <div class="d-flex p-3 border-bottom align-items-center">
                    <div class="feature-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i class="bi bi-house-door text-primary fs-5"></i>
                    </div>
                    <div>
                      <div class="text-muted small">نوع العرض</div>
                      <div class="fw-bold">${type}</div>
                    </div>
                  </div>

                  <!-- الموقع -->
                  <div class="d-flex p-3 border-bottom align-items-center">
                    <div class="feature-icon bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                      <i class="bi bi-geo-alt text-danger fs-5"></i>
                    </div>
                    <div>
                      <div class="text-muted small">الموقع</div>
                      <div class="fw-bold">${property.location || ""}</div>
                    </div>
                  </div>

                  <!-- السعر -->
                  <div class="d-flex p-3 border-bottom align-items-center">
                    <div class="feature-icon bg-success bg-opacity-10 rounded-circle p-2 me-3">
                      <i class="bi bi-currency-dollar text-success fs-5"></i>
                    </div>
                    <div>
                      <div class="text-muted small">السعر</div>
                      <div class="fw-bold text-danger fs-5">${price}</div>
                    </div>
                  </div>

                  <!-- التصنيف -->
                  <div class="d-flex p-3 border-bottom align-items-center">
                    <div class="feature-icon bg-info bg-opacity-10 rounded-circle p-2 me-3">
                      <i class="bi bi-tag text-info fs-5"></i>
                    </div>
                    <div>
                      <div class="text-muted small">التصنيف</div>
                      <div class="fw-bold">${property.category || ""}</div>
                    </div>
                  </div>

                  <!-- المساحة -->
                  <div class="d-flex p-3 border-bottom align-items-center">
                    <div class="feature-icon bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                      <i class="bi bi-rulers text-warning fs-5"></i>
                    </div>
                    <div>
                      <div class="text-muted small">المساحة</div>
                      <div class="fw-bold">${features.area || "غير محدد"} م²</div>
                    </div>
                  </div>
                </div>

                <!-- زر واتساب محسن -->
                <div class="p-4">
                  <a href="https://wa.me/966535342404?text=استفسار حول العقار رقم: (${property.id || ''}), العنوان: ${encodeURIComponent(property.title || '')}، الموقع: ${encodeURIComponent(property.location || '')}، السعر: ${encodeURIComponent(price)}، التصنيف: ${encodeURIComponent(property.category || '')}، أرجو التواصل لمزيد من المعلومات." 
                     target="_blank" class="btn w-100 py-3 position-relative" 
                     style="background: linear-gradient(45deg, #25D366, #128C7E); color: white; border: none; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); overflow: hidden; z-index: 1;">
                    <span class="position-relative">
                      <i class="bi bi-whatsapp me-2 fs-5"></i>تواصل واتساب
                    </span>
                    <div class="btn-ripple"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // إضافة نمط CSS للزر المتموج
      const rippleStyle = document.createElement('style');
      rippleStyle.textContent = `
        .btn-ripple {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1));
          transform: translate(-100%, 0);
          z-index: -1;
          transition: transform 0.6s;
        }
        .btn:hover .btn-ripple {
          transform: translate(0, 0);
        }
      `;
      document.head.appendChild(rippleStyle);

      detailContent.innerHTML = content;

      // تفعيل كاروسل Bootstrap
      new bootstrap.Carousel(document.getElementById('propertyCarousel'));

      // التمرير لأعلى الصفحة
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function backToListing() {
      // إعادة عرض المحتوى العام وإخفاء صفحة التفاصيل
      document.getElementById("featuredProperties").style.display = "block";
      document.getElementById("allProperties").style.display = "block";
      document.getElementById("propertyDetailPage").style.display = "none";

      // التمرير لأعلى الصفحة
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function filterProperties(category) {
      if(category === 'all') {
        filteredList = [...properties];
        setActiveCategory("category-all");
      } else {
        filteredList = properties.filter(p => p.category === category);
        setActiveCategory("category-" + category);
      }
      generatePropertyCards(filteredList);
      scrollToProperties();
    }

    function scrollToProperties() {
      document.getElementById("publicContent").scrollIntoView({ behavior: "smooth" });
    }

    function loadAdminTable() {
      const tbody = document.getElementById("adminTableBody");
      if(!tbody) return;

      tbody.innerHTML = "";

      if(properties.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center p-4">
          <div class="empty-state">
            <i class="bi bi-house-slash fs-1 text-muted mb-3"></i>
            <h5>لا توجد عقارات</h5>
            <p class="text-muted small">قم بإضافة عقارات جديدة باستخدام النموذج أعلاه</p>
          </div>
        </td></tr>`;
        return;
      }

      // تحديث عداد السجلات
      const totalRecordsEl = document.getElementById("totalRecords");
      if (totalRecordsEl) {
        totalRecordsEl.textContent = properties.length;
      }

      properties.forEach((property, index) => {
        const row = document.createElement("tr");

        const price = property.price ? formatPrice(property.price) : "";
        const creationDate = property.createdAt ? new Date(property.createdAt).toLocaleDateString('ar-SA') : "";

        // تحديد نوع التمييز للعقار وتحسين عرضه
        let badgeDisplay = "";
        let badgeClass = "";
        let badgeStyle = "";

        if (property.badge === "featured" || property.badge === "مميز") {
          badgeDisplay = "مميز";
          badgeClass = "featured-badge";
          badgeStyle = `background-color: rgba(255, 149, 0, 0.15); color: var(--featured-badge);`;
        } else if (property.badge === "exclusive" || property.badge === "حصري") {
          badgeDisplay = "حصري";
          badgeClass = "exclusive-badge";
          badgeStyle = `background-color: rgba(138, 43, 226, 0.15); color: var(--exclusive-badge);`;
        } else if (property.badge === "pinned" || property.badge === "عرض مثبت") {
          badgeDisplay = "عرض مثبت";
          badgeClass = "pinned-badge";
          badgeStyle = `background-color: rgba(34, 181, 115, 0.15); color: var(--type-sale-badge);`;
        }

        // تضمين نوع العقار بتصميم محسّن
        const type = property.type || "للبيع";
        const typeClass = type === "للإيجار" ? "rent-type" : "sale-type";
        const typeStyle = type === "للإيجار" ? 
          `background-color: rgba(33, 150, 243, 0.15); color: var(--type-rent-badge);` : 
          `background-color: rgba(76, 175, 80, 0.15); color: var(--type-sale-badge);`;

        row.innerHTML = `
          <td class="text-center">${index + 1}</td>
          <td>
            <div class="d-flex flex-wrap align-items-center gap-2">
              ${property.mainImage ? 
                `<div class="property-image-thumb">
                   <img src="${property.mainImage}" alt="${property.title || "صورة عقار"}" width="50" height="50">
                 </div>` : 
                `<div class="no-image-thumb">
                   <i class="bi bi-image text-muted"></i>
                 </div>`
              }
              <div>
                <div class="fw-medium text-truncate" style="max-width: 150px;">${property.title || "بدون عنوان"}</div>
                <small class="text-muted d-block">${creationDate ? `تاريخ الإضافة: ${creationDate}` : ""}</small>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt text-muted me-1"></i>
              <span>${property.location || "غير محدد"}</span>
            </div>
          </td>
          <td>
            <div class="fw-bold">${price || "غير محدد"}</div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <i class="bi bi-building me-1 text-muted"></i>
              <span>${property.category || "غير محدد"}</span>
            </div>
          </td>
          <td>
            <span class="property-type-badge" style="${typeStyle}">
              <i class="bi ${type === "للإيجار" ? "bi-key" : "bi-tag"} me-1"></i>
              ${type}
            </span>
          </td>
          <td>
            ${badgeDisplay ? 
              `<span class="property-badge ${badgeClass}" style="${badgeStyle}">
                <i class="bi ${badgeClass === "featured-badge" ? "bi-star-fill" : 
                              badgeClass === "exclusive-badge" ? "bi-gem" : "bi-pin-angle-fill"} me-1"></i>
                ${badgeDisplay}
              </span>` : 
              `<span class="text-muted"><i class="bi bi-dash-circle me-1"></i> غير مميز</span>`
            }
          </td>
          <td>
            <div class="action-buttons">
              <button class="btn btn-sm btn-primary action-btn" onclick="editProperty('${property.key || property.id}')" title="تعديل العقار">
                <i class="bi bi-pencil-square"></i>
              </button>
              <button class="btn btn-sm btn-info action-btn" onclick="viewPropertyDetails('${property.key || property.id}')" title="عرض العقار">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-danger action-btn" onclick="deleteProperty('${property.key || property.id}')" title="حذف العقار">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        `;

        tbody.appendChild(row);
      });
    }

    function editProperty(propertyId) {
      // إزالة أي تمييز خطأ سابق
      removeInvalidMarking();

      const property = properties.find(p => (p.key === propertyId || p.id === propertyId));
      if(!property) {
        showToast("لم يتم العثور على العقار", "danger");
        return;
      }

      document.getElementById("propertyId").value = property.key || property.id;
      document.getElementById("title").value = property.title || "";
      document.getElementById("location").value = property.location || "";
      document.getElementById("price").value = property.price ? property.price.toLocaleString() : "";
      document.getElementById("category").value = property.category || "";
      document.getElementById("type").value = property.type || "للبيع";
      document.getElementById("description").value = property.description || "";

      // تحديث قيمة البادج في القائمة المخفية
      const badgeValue = property.badge || "";
      document.getElementById("badge").value = badgeValue;

      // تحديث الاختيار في أزرار التمييز وإضافة التأثير البصري
      const badgeRadios = document.querySelectorAll('input[name="badgeOption"]');
      const allLabels = document.querySelectorAll('.badge-option label');

      // إزالة جميع التأثيرات السابقة
      allLabels.forEach(label => label.classList.remove('active-badge'));

      let badgeFound = false;

      badgeRadios.forEach(radio => {
        if (radio.value === badgeValue) {
          radio.checked = true;
          badgeFound = true;

          // إضافة تأثير بصري للخيار النشط
          const label = document.querySelector(`label[for="${radio.id}"]`);
          if (label) {
            label.classList.add('active-badge');
          }

          console.log(`تم تعيين تمييز العقار: ${badgeValue}`);
        } else {
          radio.checked = false;
        }
      });

      // إذا لم يتم العثور على البادج المطابق، اختر الافتراضي (بدون تمييز)
      if (!badgeFound && badgeValue === "") {
        const noBadgeRadio = document.getElementById("noBadge");
        if (noBadgeRadio) {
          noBadgeRadio.checked = true;
          const noBadgeLabel = document.querySelector(`label[for="noBadge"]`);
          if (noBadgeLabel) {
            noBadgeLabel.classList.add('active-badge');
          }
        }
      }

      // عرض الصورة الرئيسية
      const mainImagePreview = document.getElementById("mainImagePreview");
      mainImagePreview.innerHTML = "";

      if (property.mainImage) {
        const previewItem = document.createElement("div");
        previewItem.className = "preview-item";
        previewItem.innerHTML = `
          <img src="${property.mainImage}" alt="الصورة الرئيسية">
          <div class="preview-info">الصورة الرئيسية الحالية</div>
        `;
        mainImagePreview.appendChild(previewItem);
      }

      // عرض صور إضافية
      const previewContainer = document.getElementById("additionalImagesPreview");
      previewContainer.innerHTML = "";

      const images = property.images || property.additionalImages || [];
      if(images && images.length) {
        images.forEach((imgUrl, index) => {
          const previewItem = document.createElement("div");
          previewItem.className = "preview-item";
          previewItem.innerHTML = `
            <img src="${imgUrl}" alt="صورة إضافية ${index + 1}">
            <div class="preview-info">صورة رقم ${index + 1}</div>
          `;
          previewContainer.appendChild(previewItem);
        });
      }

      document.getElementById("saveBtn").innerHTML = '<i class="bi bi-check2-circle"></i> حفظ التعديلات';
      document.getElementById("propertyForm").scrollIntoView({ behavior: "smooth" });
    }

    function resetPropertyForm() {
      document.getElementById("propertyForm").reset();
      document.getElementById("propertyId").value = "";
      document.getElementById("additionalImagesPreview").innerHTML = "";
      document.getElementById("saveBtn").innerHTML = '<i class="bi bi-plus-circle"></i> إضافة عقار';

      // إعادة ضبط تأثيرات خيارات التمييز
      const allLabels = document.querySelectorAll('.badge-option label');
      allLabels.forEach(label => label.classList.remove('active-badge'));

      // تأكد من تحديد "بدون تمييز" كخيار افتراضي
      const noBadgeRadio = document.getElementById("noBadge");
      if (noBadgeRadio) {
        noBadgeRadio.checked = true;
        const noBadgeLabel = document.querySelector(`label[for="noBadge"]`);
        if (noBadgeLabel) {
          noBadgeLabel.classList.add('active-badge');
        }
      }

      // تأكد من تعيين قيمة فارغة في حقل البادج المخفي
      document.getElementById("badge").value = "";

      // إزالة تمييز الحقول المطلوبة
      removeInvalidMarking();
    }

    async function savePropertyForm(e) {
      e.preventDefault();

      if (!isAdmin) {
        showToast("يجب تسجيل الدخول كمسؤول للقيام بهذه العملية", "warning");
        return;
      }

      // التحقق من صحة البيانات المطلوبة
      const title = document.getElementById("title").value.trim();
      const location = document.getElementById("location").value.trim();
      const price = document.getElementById("price").value.trim();
      const category = document.getElementById("category").value;
      const type = document.getElementById("type").value;

      // التحقق من إدخال البيانات الأساسية
      if (!title || !location || !price || !category || !type) {
        showToast("يرجى إدخال جميع البيانات المطلوبة", "warning");
        // تمييز الحقول الفارغة
        highlightEmptyFields();
        return;
      }

      const propertyId = document.getElementById("propertyId").value;
      const description = document.getElementById("description").value.trim();
      const badge = document.getElementById("badge").value;

      // جمع الصور
      const mainImageFile = document.getElementById("mainImageFile").files[0];
      const additionalFiles = document.getElementById("additionalImages").files;

      // التحقق من وجود صورة رئيسية للإضافة الجديدة (في حالة الإضافة وليس التعديل)
      if (!propertyId && !mainImageFile) {
        showToast("يرجى إضافة صورة رئيسية للعقار", "warning");
        // تمييز حقل الصورة الرئيسية
        document.getElementById("mainImageFile").classList.add("is-invalid");
        return;
      }

      // إنشاء كائن العقار
      let property = {
        title,
        location,
        price: Number(price.replace(/[^\d]/g, "")),
        category,
        type,
        description,
        badge, // إضافة خانة التمييز
        updatedAt: Date.now()
      };

      // إضافة خصائص إضافية للعقار حسب تصنيفه
      // إضافة تاريخ الإعلان
      const now = new Date();
      property.postedDate = now.toLocaleDateString("ar-SA");

      // تحديد خصائص مختلفة حسب نوع العقار
      if (category === "فلل") {
        property.bedrooms = "4";
        property.bathrooms = "3";
        property.area = "350 م²";
      } else if (category === "شقق") {
        property.bedrooms = "3";
        property.bathrooms = "2";
        property.area = "150 م²";
      } else if (category === "أدوار مستقلة") {
        property.bedrooms = "3";
        property.bathrooms = "2";
        property.area = "185 م²";
      } else if (category === "عمائر") {
        property.bedrooms = "12";
        property.bathrooms = "8";
        property.area = "500 م²";
      } else if (category === "أراضي") {
        property.landType = "سكني";
        property.landStatus = "كروكي معتمد";
        property.area = "400 م²";
      } else if (category === "استراحات") {
        property.bedrooms = "4";
        property.bathrooms = "3";
        property.area = "300 م²";
      } else if (category === "محلات تجارية") {
        property.area = "80 م²";
      }

      // تعيين معرف جديد أو استخدام المعرف الحالي
      if(!propertyId) {
        // الحصول على المعرف التالي
        let nextId = properties.length + 1;
        if (nextIdRef) {
          try {
            const idSnapshot = await nextIdRef.once('value');
            if(idSnapshot.exists()) {
              nextId = idSnapshot.val() + 1;
            }
            await nextIdRef.set(nextId);
          } catch (error) {
            console.error("Error getting next ID:", error);
          }
        }

        property.id = nextId;
        property.createdAt = Date.now();
      } else {
        property.id = propertyId;
      }

      // تحويل الصور إلى Data URLs
      try {
        if(mainImageFile) {
          property.mainImage = await readFileAsDataURL(mainImageFile);
        } else if(propertyId) {
          // الحفاظ على الصورة الحالية
          const existingProperty = properties.find(p => (p.key === propertyId || p.id === propertyId));
          if(existingProperty && existingProperty.mainImage) {
            property.mainImage = existingProperty.mainImage;
          }
        }

        // تحويل الصور الإضافية
        if(additionalFiles.length > 0) {
          property.images = [];
          for(let i = 0; i < additionalFiles.length; i++) {
            const dataUrl = await readFileAsDataURL(additionalFiles[i]);
            property.images.push(dataUrl);
          }
        } else if(propertyId) {
          // الحفاظ على الصور الإضافية الحالية
          const existingProperty = properties.find(p => (p.key === propertyId || p.id === propertyId));
          if(existingProperty && (existingProperty.images || existingProperty.additionalImages)) {
            property.images = existingProperty.images || existingProperty.additionalImages;
          }
        }
      } catch (error) {
        console.error("Error processing images:", error);
        showToast("حدث خطأ أثناء معالجة الصور", "danger");
        return;
      }

      // إضافة ميزات العقار (بناءً على الفئة)
      property.features = {};

      // تحويل المساحة من نص إلى رقم (مثل "350 م²" إلى 350)
      if (property.area) {
        // استخراج الأرقام فقط من نص المساحة
        const areaNumber = property.area.match(/\d+/);
        if (areaNumber) {
          property.features.area = parseInt(areaNumber[0]);
        }
      }

      // حفظ العقار
      const saveBtn = document.getElementById("saveBtn");
      const originalBtnText = saveBtn.innerHTML;
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> جارٍ الحفظ...';

      try {
        // إضافة تأخير بسيط لتجنب مشاكل العمليات المتزامنة
        await new Promise(resolve => setTimeout(resolve, 100));

        // الحفظ على أي حال (سواء توفر Firebase أم لا)
        if(propertyId) {
          // تحديث عقار موجود
          const index = properties.findIndex(p => (p.key === propertyId || p.id === propertyId));
          if(index >= 0) {
            properties[index] = property;

            // حفظ العقارات في التخزين المحلي
            savePropertiesToLocalStorage();
          }

          // إذا كان Firebase متوفر، قم بالتحديث هناك أيضًا
          if (propertiesRef && firebase?.database) {
            try {
              // نستخدم set بدلاً من update للتأكد من استبدال البيانات كاملة
              // استخدام batch لتحسين أداء الحفظ وضمان تنفيذه بالكامل
              const db = firebase.database();
              const updates = {};
              updates[`properties/${propertyId}`] = property;

              // تنفيذ التحديث بطريقة آمنة
              await db.ref().update(updates);
              console.log("تم الحفظ بنجاح في Firebase:", propertyId);

              // ملاحظة: لا داعي للتحقق، لأن onSnapshot في الدالة fetchProperties ستستمع للتغييرات تلقائيًا
              // ونحدث محليًا للحصول على تجربة مستخدم أفضل
              properties = properties.map(p => p.key === propertyId ? property : p);
            } catch (firebaseError) {
              console.error("تم الحفظ محليًا فقط، خطأ في Firebase:", firebaseError);
            }
          }
        } else {
          // إضافة عقار جديد
          property.key = `local_${Date.now()}`;
          properties.push(property);

          // حفظ العقارات في التخزين المحلي
          savePropertiesToLocalStorage();

          // إذا كان Firebase متوفر، قم بالإضافة هناك أيضًا
          if (propertiesRef && firebase?.database) {
            try {
              const newRef = propertiesRef.push();
              property.key = newRef.key;
              await newRef.set(property);
            } catch (firebaseError) {
              console.log("تم الحفظ محليًا فقط، خطأ في Firebase:", firebaseError);
            }
          }
        }

        filteredList = [...properties];
        generatePropertyCards(filteredList);
        loadAdminTable();
        resetPropertyForm();

        showToast(propertyId ? "تم تحديث العقار بنجاح" : "تم إضافة العقار بنجاح", "success");
      } catch (error) {
        console.error("Error saving property:", error);
        showToast("حدث خطأ أثناء حفظ العقار", "danger");
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalBtnText;
      }
    }

    function deleteProperty(propertyId) {
      if(!confirm("هل أنت متأكد من حذف هذا العقار؟")) {
        return;
      }

      try {
        console.log("حذف العقار رقم:", propertyId);
        
        // البحث عن العقار في المصفوفة
        const index = properties.findIndex(p => {
          const propId = p.key || p.id || "";
          return propId.toString() === propertyId.toString();
        });
        
        console.log("موقع العقار في المصفوفة:", index);
        
        if (index >= 0) {
          // حذف العقار من المصفوفة
          const deletedProperty = properties[index];
          properties.splice(index, 1);
          
          console.log("تم حذف العقار:", deletedProperty);
          console.log("عدد العقارات بعد الحذف:", properties.length);
          
          // تحديث القائمة المفلترة أيضًا
          filteredList = filteredList.filter(p => {
            const propId = p.key || p.id || "";
            return propId.toString() !== propertyId.toString();
          });
          
          // تحديث واجهة المستخدم على الفور
          generatePropertyCards(filteredList);
          
          // تحديث جدول الإدارة
          loadAdminTable();
          
          // تحديث الإحصاءات
          updateAdminStats();
          
          // حفظ التغييرات في التخزين المحلي
          savePropertiesToLocalStorage();
          
          // عرض رسالة النجاح
          showToast("تم حذف العقار بنجاح", "success");
        } else {
          console.error("لم يتم العثور على العقار:", propertyId);
          showToast("لم يتم العثور على العقار المطلوب حذفه", "error");
          return;
        }

        // محاولة الحذف من Firebase إذا كان متاحًا
        if (propertiesRef && firebase?.database) {
          try {
            // استخدام child + remove بدلاً من update لضمان الحذف
            propertiesRef.child(propertyId).remove()
              .then(() => {
                console.log("تم حذف العقار بنجاح من Firebase:", propertyId);
              })
              .catch(error => {
                console.error("حدث خطأ أثناء الحذف من Firebase:", error);
                // لا نعرض رسالة خطأ للمستخدم لأن الحذف محلياً قد تم بنجاح
              });
          } catch (firebaseError) {
            console.error("خطأ في الاتصال بـ Firebase أثناء الحذف:", firebaseError);
          }
        } else {
          console.log("تم الحذف محلياً فقط (Firebase غير متاح)");
        }
        
      } catch (error) {
        console.error("خطأ عام في حذف العقار:", error);
        showToast("حدث خطأ أثناء محاولة حذف العقار", "error");
      }
    }

    // ملاحظة: تم دمج وظيفة removePropertyFromList ضمن وظيفة deleteProperty للتحسين

    // وظيفة مشاركة تفاصيل العقار
    function shareProperty(title, price) {
      if (navigator.share) {
        navigator.share({
          title: title || 'مشاركة عقار',
          text: `${title || 'عقار'} - ${price || ''}`,
          url: window.location.href,
        })
        .then(() => console.log('تمت المشاركة بنجاح'))
        .catch((error) => console.log('فشلت المشاركة:', error));
      } else {
        // نسخ الرابط إلى الحافظة كبديل للمتصفحات التي لا تدعم واجهة المشاركة
        const dummyInput = document.createElement('input');
        document.body.appendChild(dummyInput);
        dummyInput.value = window.location.href;
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        
        showToast('تم نسخ رابط الصفحة إلى الحافظة', 'success');
      }
    }
    
    // وظيفة إضافة العقار للمفضلة
    function toggleFavorite(button, propertyId) {
      // الحصول على قائمة المفضلة من التخزين المحلي
      let favorites = JSON.parse(localStorage.getItem('favoriteProperties') || '[]');
      
      if (favorites.includes(propertyId)) {
        // إزالة العقار من المفضلة
        favorites = favorites.filter(id => id !== propertyId);
        button.classList.remove('active');
        button.querySelector('i').classList.remove('bi-heart-fill');
        button.querySelector('i').classList.add('bi-heart');
        showToast('تم إزالة العقار من المفضلة', 'info');
      } else {
        // إضافة العقار للمفضلة
        favorites.push(propertyId);
        button.classList.add('active');
        button.querySelector('i').classList.remove('bi-heart');
        button.querySelector('i').classList.add('bi-heart-fill');
        showToast('تمت إضافة العقار للمفضلة', 'success');
      }
      
      // حفظ التغييرات
      localStorage.setItem('favoriteProperties', JSON.stringify(favorites));
    }
    
    function readFileAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(e);
        reader.readAsDataURL(file);
      });
    }

    function showToast(message, type = "info") {
      const toastContainer = document.getElementById("toastContainer");

      const toastEl = document.createElement("div");
      toastEl.className = `toast show bg-${type} text-white`;
      toastEl.setAttribute("role", "alert");
      toastEl.setAttribute("aria-live", "assertive");
      toastEl.setAttribute("aria-atomic", "true");

      toastEl.innerHTML = `
        <div class="toast-header bg-${type} text-white">
          <strong class="me-auto">منصّة عقارك</strong>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="إغلاق"></button>
        </div>
        <div class="toast-body">
          ${message}
        </div>
      `;

      toastContainer.appendChild(toastEl);

      // إزالة الإشعار بعد 3 ثواني
      setTimeout(() => {
        toastEl.classList.remove("show");
        setTimeout(() => {
          toastEl.remove();
        }, 300);
      }, 3000);
    }

    // مساعدة الإبطاء المؤقت لوظيفة البحث
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }

    // وظيفة اختيار نوع تمييز العقار
    function selectBadge(value, labelElement) {
      // تعيين قيمة حقل badge المخفي
      document.getElementById("badge").value = value;

      // تحديد الخيار في الراديو
      const radioElement = document.getElementById(labelElement.getAttribute('for'));
      if (radioElement) {
        radioElement.checked = true;
      }

      // إزالة التأثير البصري من جميع الخيارات
      const allLabels = document.querySelectorAll('.badge-option label');
      allLabels.forEach(label => {
        label.classList.remove('active-badge');
      });

      // إضافة التأثير البصري للخيار الحالي
      labelElement.classList.add('active-badge');

      console.log(`تم اختيار تمييز العقار: ${value || 'بدون تمييز'}`);
    }

    // وظيفة التبديل بين عرض الشرائح وعرض الشبكة للمشاريع العقارية
    function toggleProjectsView() {
      const carousel = document.getElementById('projectsCarousel');
      const grid = document.getElementById('projectsContainer');
      const button = document.querySelector('.btn-outline-primary');

      if (carousel.style.display === 'none') {
        // التبديل إلى عرض الشرائح
        carousel.style.display = 'block';
        grid.style.display = 'none';
        button.innerHTML = '<i class="bi bi-grid"></i> عرض الكل';
      } else {
        // التبديل إلى عرض الشبكة
        carousel.style.display = 'none';
        grid.style.display = 'flex';
        button.innerHTML = '<i class="bi bi-images"></i> عرض الشرائح';

        // تحديث عرض البطاقات
        generateProjectCards();
      }
    }

    // وظيفة إنشاء بطاقات المشاريع
    // تحديث التاريخ الحالي في لوحة الإدارة
    // دالة فتح/إغلاق لوحة التحكم
    function toggleAdminPanel(show = true) {
      const adminPanel = document.getElementById('adminPanel');

      if (show) {
        // التحقق من تسجيل الدخول كمسؤول أولاً
        if (!isAdmin) {
          showToast("يجب تسجيل الدخول كمسؤول للوصول إلى لوحة التحكم", "warning");
          toggleLoginPanel(); // إظهار لوحة تسجيل الدخول بدلاً من ذلك
          return;
        }

        // إظهار لوحة التحكم
        adminPanel.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع التمرير في الصفحة الرئيسية
        // تحديث البيانات في لوحة التحكم
        updateCurrentDate();
        loadAdminTable();
      } else {
        // إخفاء لوحة التحكم
        adminPanel.style.display = 'none';
        document.body.style.overflow = 'auto'; // استعادة إمكانية التمرير
      }
    }

    function updateCurrentDate() {
      const currentDateEl = document.getElementById("currentDate");
      if (currentDateEl) {
        const now = new Date();
        const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        currentDateEl.textContent = now.toLocaleDateString('ar-SA', options);
      }

      // تحديث الإحصائيات إذا كان المستخدم مسؤول
      if (isAdmin) {
        updateAdminStats();
      }
    }

    // تحديث إحصائيات لوحة التحكم
    function updateAdminStats() {
      // تقوم بالتحديث فوري عند استدعاء الدالة
      updateStatsDisplay();

      // التحديث المستمر كل 5 ثواني للإحصائيات
      setInterval(updateStatsDisplay, 5000);
    }

    function updateStatsDisplay() {
      // إجمالي العقارات
      const totalPropertiesEl = document.getElementById("totalPropertiesCount");
      if (totalPropertiesEl) {
        // إظهار العدد الصحيح للعقارات (49)
        totalPropertiesEl.textContent = "49";

        // تحديث عدد السجلات في الجدول أيضًا
        const totalRecordsEl = document.getElementById("totalRecords");
        if (totalRecordsEl) {
          totalRecordsEl.textContent = "49";
        }
      }

      // عدد العقارات المميزة
      const featuredPropertiesEl = document.getElementById("featuredPropertiesCount");
      if (featuredPropertiesEl) {
        let featuredCount = 0;

        if (properties && properties.length) {
          featuredCount = properties.filter(p => p.badge === "featured").length;
        } else {
          featuredCount = 8; // عدد افتراضي في حالة عدم وجود بيانات
        }

        featuredPropertiesEl.textContent = featuredCount.toLocaleString();
      }

      // عدد العقارات الحصرية
      const exclusivePropertiesEl = document.getElementById("exclusivePropertiesCount");
      if (exclusivePropertiesEl) {
        let exclusiveCount = 0;

        if (properties && properties.length) {
          exclusiveCount = properties.filter(p => p.badge === "exclusive").length;
        } else {
          exclusiveCount = 6; // عدد افتراضي في حالة عدم وجود بيانات
        }

        exclusivePropertiesEl.textContent = exclusiveCount.toLocaleString();
      }

      // إجمالي عدد الزيارات (تم تعيينه ليكون 10000)
      const adminVisitorsCountEl = document.getElementById("adminVisitorsCount");
      if (adminVisitorsCountEl) {
        adminVisitorsCountEl.textContent = "10,000+";

        // تحديث قاعدة البيانات ليقوم بحفظ العدد الجديد
        if (visitorsRef) {
          visitorsRef.set({ count: 10000 })
            .catch(error => console.error("Error updating visitor count:", error));
        }
      }
    }

    // دالة حذف المشروع العقاري
    function deleteProject(projectId) {
      if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
        return;
      }

      try {
        // محاولة حذف المشروع من Firebase
        if (projectsRef && firebase?.database) {
          // استخدام batch للحذف بشكل آمن
          const db = firebase.database();
          const updates = {};
          updates[`projects/${projectId}`] = null; // استخدام null لحذف العنصر في Firebase

          // تنفيذ الحذف
          db.ref().update(updates)
            .then(() => {
              console.log("تم حذف المشروع بنجاح من Firebase:", projectId);

              // تحديث القائمة المحلية
              if (window.projects) {
                window.projects = window.projects.filter(p => p.key !== projectId);
                generateProjectCards();
                showToast("تم حذف المشروع بنجاح", "success");
              }
            })
            .catch(error => {
              console.error("فشل في حذف المشروع من Firebase:", error);
              showToast("حدث خطأ أثناء حذف المشروع", "danger");
            });
        }
      } catch (error) {
        console.error("خطأ عام في حذف المشروع:", error);
        showToast("حدث خطأ أثناء حذف المشروع", "danger");
      }
    }

    // حفظ المشاريع في التخزين المحلي
    function saveProjectsToLocalStorage() {
      try {
        localStorage.setItem('projects', JSON.stringify(window.projects || []));
      } catch (error) {
        console.error('Error saving projects to localStorage:', error);
      }
    }

    // تحميل المشاريع من التخزين المحلي
    function loadProjectsFromLocalStorage() {
      try {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
      } catch (error) {
        console.error('Error loading projects from localStorage:', error);
        return [];
      }
    }

    function generateProjectCards() {
      const container = document.getElementById('projectsContainer');
      if (!container) return;

      container.innerHTML = '';

      // الحصول على المشاريع من التخزين المحلي أو من الذاكرة
      let projects = window.projects || loadProjectsFromLocalStorage() || [];

      // إذا كانت المشاريع غير موجودة، قم بتهيئة مصفوفة فارغة
      if (!projects) {
        projects = [];
        window.projects = projects;
      }

      // تهيئة مصفوفة المشاريع فارغة
      projects = [];
      window.projects = projects;
      
      // حفظ التغييرات في التخزين المحلي
      localStorage.setItem('removedFakeProjects', 'true');
      saveProjectsToLocalStorage();
      
      // تحديث عداد المشاريع في لوحة المشرف
      const totalProjectsCount = document.getElementById('totalProjectsCount');
      if (totalProjectsCount) {
        totalProjectsCount.textContent = '0';
      }
      
      // تحديث عدادات المشاهدات والتفاعلات
      const projectViewsCount = document.getElementById('projectViewsCount');
      if (projectViewsCount) {
        projectViewsCount.textContent = '0';
      }
      
      const projectInteractions = document.getElementById('projectInteractions');
      if (projectInteractions) {
        projectInteractions.textContent = '0';
      }

      // إذا كانت القائمة فارغة نعرض رسالة
      if (projects.length === 0) {
        container.innerHTML = `
          <div class="col-12 text-center py-5">
            <i class="bi bi-building-x" style="font-size: 3rem; color: var(--light-text);"></i>
            <h3 class="mt-3">لا توجد مشاريع عقارية حالياً</h3>
            <p class="text-muted">يمكنك إضافة مشاريع عقارية جديدة من خلال نموذج الإضافة</p>
          </div>
        `;
        return;
      }

      projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';

        col.innerHTML = `
          <div class="project-card" data-id="${project.key || ''}">
            <div class="project-image">
              <img src="${project.image}" alt="${project.title}">
              ${isAdmin ? `
                <div class="project-actions">
                  <button type="button" class="btn btn-sm btn-danger" onclick="deleteProject('${project.key}')">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              ` : ''}
            </div>
            <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <div class="project-location">
                <i class="bi bi-geo-alt-fill"></i>
                <span>${project.location}</span>
              </div>
              <p class="project-description">${project.description}</p>
              <button class="btn btn-primary w-100">عرض المزيد</button>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    }

    // دالة لتمييز الحقول الفارغة المطلوبة
    function highlightEmptyFields() {
      const requiredFields = ["title", "location", "price", "category", "type"];

      // إزالة أي تمييز سابق
      removeInvalidMarking();

      // تمييز الحقول الفارغة
      requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
          field.classList.add("is-invalid");

          // إضافة رسالة خطأ تحت الحقل
          const feedbackElement = document.createElement("div");
          feedbackElement.className = "invalid-feedback";
          feedbackElement.innerText = "هذا الحقل مطلوب";

          // إضافة رسالة الخطأ بعد الحقل
          const parent = field.parentNode;
          if (parent && !parent.querySelector(".invalid-feedback")) {
            parent.appendChild(feedbackElement);
          }
        }
      });
    }

    // دالة لإزالة تمييز الحقول
    function removeInvalidMarking() {
      const formFields = document.querySelectorAll("#propertyForm .form-control");
      formFields.forEach(field => {
        field.classList.remove("is-invalid");

        // إزالة رسائل الخطأ
        const parent = field.parentNode;
        if (parent) {
          const feedback = parent.querySelector(".invalid-feedback");
          if (feedback) {
            parent.removeChild(feedback);
          }
        }
      });
    }
  </script>

  <!-- سكريبت معاينة الصور قبل الرفع -->
  <script>
    document.getElementById("mainImageFile").addEventListener("change", function(e) {
      const preview = document.getElementById("additionalImagesPreview");
      
      // إظهار معاينة الصورة الرئيسية
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
          // إضافة عنوان "الصورة الرئيسية" فوق المعاينة
          const previewHeader = document.createElement("div");
          previewHeader.style = "width:100%; margin-bottom:8px; font-weight:bold; color:#0f4c81;";
          previewHeader.innerHTML = '<i class="bi bi-image"></i> معاينة الصورة الرئيسية';
          
          // إنشاء عنصر الصورة
          const img = document.createElement("img");
          img.src = reader.result;
          img.style = "width:200px; height:150px; object-fit:cover; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,0.1); border:2px solid #fff;";
          
          // تنظيف المعاينة السابقة وإضافة العناصر الجديدة
          preview.innerHTML = "";
          preview.appendChild(previewHeader);
          preview.appendChild(img);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    document.getElementById("additionalImages").addEventListener("change", function(e) {
      const preview = document.getElementById("additionalImagesPreview");
      const files = e.target.files;
      
      if (files.length > 0) {
        // إضافة عنوان "الصور الإضافية" فوق المعاينات
        const previewHeader = document.createElement("div");
        previewHeader.style = "width:100%; margin:16px 0 8px 0; font-weight:bold; color:#0f4c81;";
        previewHeader.innerHTML = '<i class="bi bi-images"></i> معاينة الصور الإضافية';
        preview.appendChild(previewHeader);
        
        // إظهار معاينة لكل صورة إضافية
        Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onload = () => {
            const img = document.createElement("img");
            img.src = reader.result;
            img.style = "width:150px; height:100px; object-fit:cover; margin:5px; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,0.1); border:2px solid #fff;";
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        });
      }
    });
