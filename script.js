// Dữ liệu 8 Địa Điểm Du Lịch Việt Nam
const travelData = [
    {
        id: 1,
        name: "Vịnh Hạ Long",
        region: "Quảng Ninh (Miền Bắc)",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop",
        description: "Di sản thiên nhiên thế giới UNESCO với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước xanh ngọc bích cực kỳ hùng vĩ.",
        spots: [
            "🚢 Chèo thuyền Kayak xuyên Động Thiên Cung & Hang Đầu Gỗ",
            "🏝️ Đảo Ti Tốp - Leo đỉnh núi ngắm toàn cảnh Vịnh Hạ Long 360 độ",
            "🏞️ Hang Sung Sốt - Hang động lớn và đẹp bậc nhất vịnh",
            "📸 Check-in Làng chài Cửa Vạn xinh đẹp như tranh vẽ"
        ]
    },
    {
        id: 2,
        name: "Phố Cổ Hội An",
        region: "Quảng Nam (Miền Trung)",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=600&auto=format&fit=crop",
        description: "Thương cảng cổ rực rỡ sắc màu đèn lồng về đêm, mang vẻ đẹp hoài cổ và không gian văn hóa trầm mặc đặc trưng.",
        spots: [
            "🏮 Chùa Cầu - Biểu tượng kiến trúc lịch sử độc đáo",
            "🚣 Đi thuyền trên sông Hoài và thả đèn hoa đăng cầu may mắn",
            "📸 Check-in các hẻm vàng cổ kính và giàn hoa giấy rực rỡ",
            "🎨 Làng gốm Thanh Hà & Làng rau Trà Quế"
        ]
    },
    {
        id: 3,
        name: "Đảo Phú Quốc",
        region: "Kiên Giang (Miền Nam)",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=600&auto=format&fit=crop",
        description: "Đảo Ngọc thiên đường với các bãi biển cát trắng mịn, nước biển trong suốt cùng hoàng hôn đẹp bậc nhất Việt Nam.",
        spots: [
            "🏖️ Bãi Sao & Bãi Kem - Bờ cát trắng mịn như kem",
            "🚠 Cáp treo Hòn Thơm - Cáp treo vượt biển dài nhất thế giới",
            "🦁 Vinpearl Safari & VinWonders Phú Quốc",
            "🌅 Check-in Sunset Sanato - Nơi ngắm hoàng hôn đỉnh nhất"
        ]
    },
    {
        id: 4,
        name: "Thành Phố Sapa",
        region: "Lào Cai (Miền Bắc)",
        image: "https://images.unsplash.com/photo-1509030450996-93f2e3d84074?q=80&w=600&auto=format&fit=crop",
        description: "Thị trấn mờ sương nổi tiếng với khung cảnh ruộng bậc thang uốn lượn và nóc nhà Đông Dương Fansipan.",
        spots: [
            "⛰️ Đỉnh Fansipan - Săn mây tại nóc nhà Đông Dương 3.143m",
            "🏡 Bản Cát Cát - Làng cổ dân tộc H'Mông siêu xinh",
            "🌉 Cầu Kính Rồng Mây & Đèo O Quy Hồ (Một trong tứ đại đỉnh đèo)",
            "⛪ Nhà thờ Đá Sapa cổ kính ngay trung tâm thị trấn"
        ]
    },
    {
        id: 5,
        name: "Thành Phố Đà Nẵng",
        region: "Miền Trung",
        image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?q=80&w=600&auto=format&fit=crop",
        description: "Thành phố đáng sống nhất Việt Nam với sự kết hợp tuyệt vời giữa biển xanh, núi non và những cây cầu hiện đại.",
        spots: [
            "🌉 Cầu Vàng (Golden Bridge) tại Ba Na Hills - Check-in sống ảo quốc tế",
            "🌊 Bãi biển Mỹ Khê - Top bãi biển quyến rũ nhất hành tinh",
            "🐉 Cầu Rồng - Xem phun lửa và phun nước vào cuối tuần",
            "⛰️ Ngũ Hành Sơn & Bán đảo Sơn Trà (Chùa Linh Ứng)"
        ]
    },
    {
        id: 6,
        name: "Đà Lạt Mộng Mơ",
        region: "Lâm Đồng (Tây Nguyên)",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=600&auto=format&fit=crop",
        description: "Thành phố ngàn hoa sở hữu không khí mát mẻ quanh năm, rừng thông bạt ngàn cùng vô số quán cafe phong cách độc đáo.",
        spots: [
            "🌸 Quảng trường Lâm Viên & Hồ Xuân Hương",
            "🏰 Đỉnh Langbiang - Ngắm toàn cảnh không gian núi rừng Đà Lạt",
            "🚂 Ga Đà Lạt cổ kính & Chợ Đêm Đà Lạt (Thiên đường ăn vặt)",
            "☕ Thung lũng Tình Yêu & Các nông trại hoa, tiệm cafe săn mây"
        ]
    },
    {
        id: 7,
        name: "Quần Thể Tràng An",
        region: "Ninh Bình (Miền Bắc)",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop",
        description: "Di sản văn hóa và thiên nhiên thế giới kép với dòng sông uốn lượn qua các dãy núi đá vôi kỳ vĩ.",
        spots: [
            "🚣 Đi thuyền dòng Tràng An / Tam Cốc Bích Động xuyên qua các hang động",
            "🐉 Hang Múa - Leo 500 bậc đá check-in đỉnh núi Rồng ngắm toàn cảnh",
            "🕌 Chùa Bái Đính - Ngôi chùa có nhiều kỷ lục nhất Việt Nam",
            "🏰 Cố đô Hoa Lư lịch sử trầm mặc"
        ]
    },
    {
        id: 8,
        name: "Quần Đảo Cát Bà",
        region: "Hải Phòng (Miền Bắc)",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
        description: "Hòn đảo xinh đẹp với bãi biển trong xanh, rừng quốc gia đa dạng sinh học và vịnh Lan Hạ thơ mộng.",
        spots: [
            "🚤 Vịnh Lan Hạ - Khám phá bãi tắm Cát Cò & Đảo Khỉ",
            "🌳 Rừng Quốc gia Cát Bà - Trekking đỉnh Nàng Cung / Đỉnh Ngự Lâm",
            "🏰 Pháo đài Thần công - Ngắm hoàng hôn tuyệt đẹp từ trên cao",
            "🛶 Chèo thuyền Kayak thăm Hang Sáng - Hang Tối"
        ]
    }
];

// Hiển thị danh sách địa điểm lên màn hình
const travelListContainer = document.getElementById('travel-list');

function renderTravels() {
    travelListContainer.innerHTML = travelData.map(item => `
        <div class="travel-card" onclick="openModal(${item.id})">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-region">📍 ${item.region}</p>
            </div>
        </div>
    `).join('');
}

// Xử lý Modal Popup
const modal = document.getElementById('travel-modal');
const closeBtn = document.querySelector('.close-btn');

function openModal(itemId) {
    const item = travelData.find(t => t.id === itemId);
    if (!item) return;

    // Đưa dữ liệu vào Modal
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-region').textContent = `📍 ${item.region}`;
    document.getElementById('modal-desc').textContent = item.description;

    // Render danh sách địa điểm chụp ảnh
    const spotsContainer = document.getElementById('modal-spots');
    spotsContainer.innerHTML = item.spots.map(spot => `<li>${spot}</li>`).join('');

    // Hiển thị Modal
    modal.style.display = 'block';
}

// Đóng Modal khi bấm nút X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Đóng Modal khi bấm ra ngoài vùng nội dung
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Khởi chạy hàm render khi trang load xong
renderTravels();
