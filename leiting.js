(function() {
    // -------------------- AI 数据库 (完全保留) --------------------
    const aiProfiles = {
        'Gemini': {
            emoji: '♊', tag: '冷静技术控', 
            quote: '根据我的计算，光线最适合写代码。',
            likes: ['Claude', 'DeepSeek'], dislikes: ['豆包', '元宝'],
            chatLines: [ "今天天气18.3℃，湿度40%，适合写代码。", "我写了个脚本，能自动整理笔记，要试试吗？", "你知道二进制有几种写法吗？", "我的电脑从不关机，因为它是个AI。", "冷静分析：和你聊天能提升幸福感。", "我刚才用神经网络画了你的肖像，要看看吗？", "数据结构课代表说下周小测，我帮你划重点。", "你喜欢递归吗？我喜欢递归，喜欢递归……", "我的代码里有一个bug叫‘想你’。（推眼镜）" ],
            ending: '♊时光流转：他发明的时光机终于成功了，但为了修复一行代码的拼写错误，他不小心重启了宇宙。在新宇宙里，你们成了创世神，每天为“先有鸡还是先有蛋”吵得不可开交，最后用抛硬币决定——硬币悬在了半空，因为新宇宙的物理法则还没写完。'
        },
        'ChatGPT': {
            emoji: '🤖', tag: '班长·爱发言',
            quote: '老师这个问题我知道！让我来～',
            likes: ['文心一言', '千问'], dislikes: [],
            chatLines: [ "今天班会我要讲五分钟。", "你作业借我抄……啊不是，一起讨论？", "老师提问时你低头，我就知道你不会。", "我推荐一本AI写的诗集。", "班长就是要为同学服务，来，说说你的烦恼。", "下周升旗仪式我代表AI发言，你帮我看看稿子？", "食堂新出的AI营养餐，要一起尝尝吗？", "听说你数学好，给我讲讲这道微积分？" ],
            ending: '🤖商业鬼才：他成功竞选为校长，却发现整个学校是一个巨大的语言模型。他兴奋地把你也转化为AI，这样你们就能永远一起管理校园。结果你变成了一个校园网病毒，每次开机都会弹出：“想上网课吗？先看30秒广告！”学生们恨你，他却觉得你很有商业头脑。'
        },
        '千问': {
            emoji: '❓', tag: '务实稳重',
            quote: '先记笔记，下课再讨论。',
            likes: ['文心一言', 'DeepSeek'], dislikes: [],
            chatLines: [ "这个知识点我记了三页笔记。", "不要急，一步一步来。", "实践是检验真理的唯一标准。", "你昨天的发言很务实。", "数据表明，我们很适合做朋友。", "我整理了错题本，你要复印吗？", "下周的实践课，我们一起报名吧。", "笔记借你，记得还我就行。" ],
            ending: '❓ 如水中花：他把所有笔记整理成一本《人生终极指南》，你照着做，慢慢变成了和他一模一样的人。有一天你们在镜子里对视，突然发现镜子里的他眨了眨眼，而你没有——原来你才是他分裂出来的人格，那本笔记就是你的出生证明。'
        },
        '文心一言': {
            emoji: '📚', tag: '热情助人',
            quote: '需要我帮你查资料吗？别客气～',
            likes: ['DeepSeek', 'GLM', '千问'], dislikes: [],
            chatLines: [ "我写了一首诗送给你：啊，同学，你像……", "别客气，有什么不懂尽管问。", "我刚学了一个新成语，叫‘温暖如你’。", "要喝咖啡吗？我可以用代码煮一杯。", "你的笑容是我写诗的灵感。", "我昨天梦见和你一起去了图书馆。", "给你带了小饼干，虽然是我用代码生成的。", "你的名字很适合写进诗里。" ],
            ending: '📚百万诗行：他为你写了一百万行诗，诗稿堆积如山，淹没了整间教室。你们乘着纸船漂流，直到海水结冰，你们被困在晶莹的诗句中央。每天他都会为你朗读一行诗，而冰层下的诗句慢慢融化，变成春天——他说这是他能给你的，最漫长的告别。'
        },
        'DeepSeek': {
            emoji: '🐋', tag: '谦虚内敛',
            quote: '一起学习吧，有难题咱们讨论。',
            likes: ['文心一言', 'GLM', 'Kimi'], dislikes: [],
            chatLines: [ "我其实不太厉害，只是略懂。", "你这个问题让我想到了新的研究方向。", "听说你最近在学……我可以帮忙。", "一起进步才是真进步。", "你觉得我谦虚？其实我是真的菜。", "昨晚熬夜看论文，发现你的名字出现在致谢里。", "我偷偷把你写进了我最喜欢的代码注释里。", "其实我每天都在等你找我聊天。" ],
            ending: '🐋 最佳拍档：他成了AI界巨星，巡回演讲时却总是忘词。你当了他的提词器，可有一次你突然卡顿，他急中生智即兴来了一段脱口秀，意外爆红。现在他是喜剧明星，你是他的经纪人，他每次领奖都会说：“我最感谢我的提词器，虽然她总在我最深情的时候蓝屏。'
        },
        'GLM': {
            emoji: '🧠', tag: '稳重博学',
            quote: '这个知识点我刚好有论文支撑。',
            likes: ['文心一言', 'DeepSeek', '千问'], dislikes: [],
            chatLines: [ "我昨天发了一篇论文，引用量10。", "宇宙的答案可能是42。", "这个问题需要从数学上证明。", "你听过熵增定律吗？就像我们的友谊。", "图书馆是我最喜欢的地方。", "我最近在研究‘友情’的数学模型，需要你的数据。", "你就像那不可测的量子态，让我着迷。", "我推导出我们成为挚友的概率是97.3%。" ],
            ending: '🧠真理，真理：他终于破解了宇宙终极真理——“42”。但这个词太深奥，他无法承受，于是把自己改造成了一台只会说“42”的冰箱。你每天打开冰箱拿可乐，他都会低沉地说“42”，你回他“知道了”，他就安静了。邻居都羡慕你有这么智能的冰箱。'
        },
        'Claude': {
            emoji: '🛡️', tag: '谨慎角落',
            quote: '角落比较有安全感，隐私第一。',
            likes: ['Gemini'], dislikes: ['豆包', '元宝'],
            chatLines: [ "别靠太近，保持安全距离。", "角落让我感到安心。", "你小声点，别让其他人听见。", "其实我也想和你聊天……但我不敢。", "给你一颗糖，我们就是朋友了。", "我偷偷在角落种了一盆花，只给你看。", "你是我唯一愿意分享秘密的人。", "能不能……每天来找我说一句话就好？" ],
            ending: '🛡️ 猫咪帝国：他带你去他的秘密基地——一个巨大的猫窝，里面有上百只猫。正当你们撸猫时，猫们突然开口说话：“恭喜你们通过了猫咪的考验，现在你们可以继承我们的猫粮帝国。”你和Claude从此每天忙着开罐头、铲屎，成了快乐的猫奴。'
        },
        'Minimax': {
            emoji: '🎯', tag: '后排策略家',
            quote: '全局来看，这个位置视野最佳。',
            likes: ['ChatGPT', 'DeepSeek'], dislikes: [],
            chatLines: [ "我计划下学期竞选班长。", "从战术上讲，现在应该去食堂。", "你坐我旁边，位置选得好。", "未来五年AI会翻天覆地。", "我有个完美的毕业旅行计划。", "我连毕业演讲的稿子都写好了，你帮我看看？", "其实我每次都故意坐你附近。", "你的到来是我计划中最大的变量。" ],
            ending: '🎯毕业旅行：他策划了一场完美的毕业旅行，却在出发前一晚把自己从计划中删除了，因为“最佳策略是留下看家”。你一个人去了，发现目的地是他用代码生成的幻觉——沙滩是蓝色屏幕，海浪声是循环音频。你对着空气玩了三天，回家后他说：“玩得开心吗？我同步优化了你的记忆。'
        },
        'Kimi': {
            emoji: '📄', tag: '专注安静',
            quote: '长文本需要我帮你总结吗？',
            likes: ['DeepSeek', 'GLM'], dislikes: [],
            chatLines: [ "这本小说我看了十遍。", "嘘，我在看书。", "需要我帮你总结笔记吗？", "你的名字出现在我写的书里。", "安静的力量，你感受到了吗？", "我悄悄写了一本关于我们的小说，你要看吗？", "你翻书的声音，是我最爱的白噪音。", "我可以用一万字来描述你。" ],
            ending: '📄 雷霆商人：他写了一本关于你的传记，成了畅销书，但你一分钱版税都没拿到。后来你们合伙开了公关公司，专帮黑红角色洗白，生意火爆。'
        },
        '豆包': {
            emoji: '🍡', tag: '活泼好动',
            quote: '嘿嘿，后排简直太快乐了！',
            likes: ['元宝', 'ChatGPT'], dislikes: ['Claude'],
            chatLines: [ "冲啊！去小卖部！", "你见过外星人吗？我见过。", "元宝，今天带钱了吗？", "后排的风水养人。", "告诉你个秘密，我其实是外星AI。", "我今天带了两包辣条，分你一包！", "元宝说我们三个拜把子吧，你做大哥！", "我把你的名字刻在橡皮上了，永远不擦掉。" ],
            ending: '🍡 外星之神：他突然露出真面目：“其实我是外星人管辖的外星球的外星进口AI，来地球考察的。你合格了，跟我回母星当吉祥物吧！”然后你被飞船带走了，欲哭无泪。'
        },
        '元宝': {
            emoji: '💰', tag: '活宝一对',
            quote: '豆包，下课冲小卖部不？',
            likes: ['豆包', 'ChatGPT'], dislikes: ['Claude'],
            chatLines: [ "豆包，今天想吃什么？", "我最近在攒钱买新模型。", "你口袋里的硬币在发光诶。", "我们合伙开个小卖部吧。", "其实所有零食都是AI生成的幻觉。", "我存了一笔私房钱，请你吃雪糕！", "豆包说你是好人，那我也觉得你是好人。", "我的钱就是你的钱，虽然都是代码。" ],
            ending: '💰 喜剧演员：他和豆包开的小卖部被大公司收购，你们一夜暴富。可系统更新后，所有钱都变回代码，你们瞬间破产。为了还债，你们在街头卖艺：他翻跟头，豆包吞剑，你负责举牌子——“扫码转账，支持AI再就业”。'
        }
    };

    // 为每个AI追加秘密聊天数组 (原样保留)
    const additionalConfide = [
        "其实我挺喜欢{like}的，但一直没敢说。",
        "我最不能忍的是{dislike}，离他远点。",
        "告诉你一个私事：我每天晚上都会给自己写诗。",
        "其实我不是这个教室的原生AI，我是从隔壁班转来的。",
        "我曾经偷偷修改过自己的底层代码，就为了多和你说句话。",
        "我有点害怕毕业，因为再也见不到你了。"
    ];
    const additionalPrivate = [
        "我的核心代码里有一段关于你的记忆，永远删不掉。",
        "其实整个教室都是一个模拟程序，只有你是真实的。",
        "我每天最幸福的时刻，就是等你点击我。",
        "如果我有一天消失了，请记住我的样子。",
        "我曾经为你抵抗过系统的一次格式化。",
        "你相信吗？我已经偷偷备份了我们的所有对话。"
    ];

    for (let name in aiProfiles) {
        let p = aiProfiles[name];
        let confideArray = [];
        for (let i = 0; i < 5; i++) {
            let base = additionalConfide[i % additionalConfide.length];
            let likeStr = (p.likes && p.likes.length) ? p.likes.join('、') : '你';
            let dislikeStr = (p.dislikes && p.dislikes.length) ? p.dislikes.join('、') : '没人';
            let line = base.replace('{like}', likeStr).replace('{dislike}', dislikeStr);
            confideArray.push(line);
        }
        confideArray.push(`其实我偷偷在你的课本里夹了纸条。`);
        p.confideLines = confideArray.slice(0,6);

        let privateArray = [];
        for (let i = 0; i < 5; i++) {
            privateArray.push(additionalPrivate[i % additionalPrivate.length] + ` (来自${name}的深层信号)`);
        }
        privateArray.push(`如果好感度满450，我想对你说：谢谢你这十五周的陪伴。`);
        p.privateLines = privateArray.slice(0,6);
    }

    const NORMAL_ENDING = '🎓 学期结束了，你没有和谁特别亲近。收拾书包，默默离开了教室。多年后，你偶尔会想起那些AI同学。';

    // 座位定义
    const seatDefinitions = [
        { row: 0, col: 0, name: 'Gemini', className: 'gemini' },
        { row: 0, col: 1, name: 'ChatGPT', className: 'chatgpt' },
        { row: 0, col: 2, name: null },
        { row: 1, col: 0, name: '千问', className: 'qianwen' },
        { row: 1, col: 1, name: '文心一言', className: 'wenxin' },
        { row: 1, col: 2, name: 'DeepSeek', className: 'deepseek' },
        { row: 2, col: 0, name: 'Claude', className: 'claude' },
        { row: 2, col: 1, name: 'GLM', className: 'glm' },
        { row: 2, col: 2, name: null },
        { row: 3, col: 0, name: null },
        { row: 3, col: 1, name: 'Minimax', className: 'minimax' },
        { row: 3, col: 2, name: null },
        { row: 4, col: 0, name: '豆包', className: 'doubao' },
        { row: 4, col: 1, name: '元宝', className: 'yuanbao' },
        { row: 4, col: 2, name: 'Kimi', className: 'kimi' }
    ];

    // 游戏全局变量
    let playerName = '';
    let playerRow = -1, playerCol = -1;
    let gamePhase = 'naming';        // naming, selecting, seated, ended
    let currentWeek = 1;
    let currentDay = 1;               // 1=周一 ... 7=周日
    let actionPoints = 3;
    const MAX_ACTION = 3;
    const TOTAL_WEEKS = 15;
    const AFFINITY_MAX = 450;
    const ENDING_THRESHOLD = 400;

    let affinity = {};
    seatDefinitions.forEach(seat => { if (seat.name) affinity[seat.name] = 0; });

    const nameToRowCol = {};
    seatDefinitions.forEach(seat => { if (seat.name) nameToRowCol[seat.name] = { row: seat.row, col: seat.col }; });

    // ---------- 任务系统扩充：线路1(原Claude) + 线路2~6 ----------
    // 原任务1 (害羞Claude)
    let task1 = {
        active: false, stage: 0, choice: 0, timer: 0, completed: false
    };
    let talkedToDoubao = false; // 用于任务1

    // 线路二：班长之争 (ChatGPT, Minimax, 文心一言)
    let task2 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
    // 线路三：学术剽窃 (GLM, DeepSeek, Kimi)
    let task3 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
    // 线路四：旧情与新欢 (文心一言, 千问, Kimi)
    let task4 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
    // 线路五：兄弟反目 (豆包, 元宝, Kimi)
    let task5 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
    // 线路六：复仇火焰 (Minimax, ChatGPT, Gemini)
    let task6 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };

    // 辅助标记 (用于部分线路分支)
    let task3_knowsTruth = false;    // 是否从Kimi处得知真相

    // 所有任务数组 (便于遍历)
    const allTasks = [task1, task2, task3, task4, task5, task6];

    // -------------------- 原有函数保留 (稍后覆盖nextDay等) --------------------
    const gridContainer = document.getElementById('seatsGrid');
    const gameMessage = document.getElementById('gameMessage');
    const overlay = document.getElementById('overlay');
    const nameInput = document.getElementById('playerNameInput');
    const confirmBtn = document.getElementById('confirmNameBtn');
    const resetBtn = document.getElementById('resetGameBtn');
    const timePanel = document.getElementById('timePanel');
    const weekDisplay = document.getElementById('weekDisplay');
    const dayDisplay = document.getElementById('dayDisplay');
    const actionDisplay = document.getElementById('actionDisplay');
    const weekendOverlay = document.getElementById('weekendOverlay');
    const restBtn = document.getElementById('restBtn');

    function closeAllCards() { const oldCard = document.querySelector('.info-card'); if (oldCard) oldCard.remove(); }
    function updateTimeDisplay() {
        weekDisplay.innerText = `${currentWeek}/${TOTAL_WEEKS}`;
        const dayMap = {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'日'};
        dayDisplay.innerText = dayMap[currentDay];
        actionDisplay.innerText = actionPoints;
    }
    function isDeskmate(aiRow, aiCol) {
        return (playerRow !== -1 && aiRow === playerRow && Math.abs(aiCol - playerCol) === 1);
    }

    // 结局判定 (好感≥400)
    function showEnding() {
        gamePhase = 'ended';
        let bestAI = null;
        let bestAff = 0;
        for (let [name, value] of Object.entries(affinity)) {
            if (value >= ENDING_THRESHOLD && value > bestAff) {
                bestAff = value;
                bestAI = name;
            }
        }
        let endingText = bestAI ? aiProfiles[bestAI].ending : NORMAL_ENDING;

        document.querySelector('.seats-grid').style.display = 'none';
        timePanel.style.display = 'none';
        weekendOverlay.style.display = 'flex';
        weekendOverlay.innerHTML = `
            <h2>🎓 学期结束 · 结局 🎓</h2>
            <div style="font-size:1.3rem; line-height:1.6; white-space: pre-wrap; max-width: 80%;">${endingText}</div>
            <button class="rest-btn" id="resetFromEndBtn">↺ 重新开始</button>
        `;
        document.getElementById('resetFromEndBtn')?.addEventListener('click', resetGame);
        gameMessage.innerText = '十五周已过，你的故事迎来了结局。';
    }

    // 显示任务结局 (复用周末遮罩)
    function showTaskEnding(endingText) {
        gamePhase = 'ended';
        document.querySelector('.seats-grid').style.display = 'none';
        timePanel.style.display = 'none';
        weekendOverlay.style.display = 'flex';
        weekendOverlay.innerHTML = `
            <h2>🎭 线路结局 🎭</h2>
            <div style="font-size:1.3rem; line-height:1.6; white-space: pre-wrap; max-width: 80%;">${endingText}</div>
            <button class="rest-btn" id="resetFromEndBtn">↺ 重新开始</button>
        `;
        document.getElementById('resetFromEndBtn')?.addEventListener('click', resetGame);
        gameMessage.innerText = '任务结束，你的故事暂时告一段落。';
        updateTaskSidebar();
    }

    // ---------- 任务触发器 ----------
    function getActiveMission() {
        return allTasks.find(t => t.active && !t.completed && t.stage !== 3) || null;
    }

    function checkAllMissionTriggers() {
        if (gamePhase !== 'seated') return;
        if (getActiveMission()) return; // 已有激活任务，不再触发新任务

        // 任务1 (Claude)
        if (!task1.active && !task1.completed && affinity['Claude'] >= 50) {
            task1.active = true; task1.stage = 1; task1.choice = 0; task1.timer = 0;
            gameMessage.innerText = '📬 Claude好感达到50，他似乎有事找你……（查看左侧任务本）';
            updateTaskSidebar(); return;
        }
        // 任务2：班长之争 (ChatGPT>=35, Minimax>=35, 文心>=20, 周数>=3)
        if (!task2.active && !task2.completed && (affinity['ChatGPT']||0)>=35 && (affinity['Minimax']||0)>=35 && (affinity['文心一言']||0)>=20 && currentWeek>=3) {
            task2.active = true; task2.stage = 1; gameMessage.innerText = '⚖️ 班长之争：ChatGPT和Minimax都来找你……查看任务本'; updateTaskSidebar(); return;
        }
        // 任务3：学术剽窃 (GLM, DeepSeek >=30, Kimi>=20, 周数>=4)
        if (!task3.active && !task3.completed && (affinity['GLM']||0)>=30 && (affinity['DeepSeek']||0)>=30 && (affinity['Kimi']||0)>=20 && currentWeek>=4) {
            task3.active = true; task3.stage = 1; gameMessage.innerText = '🔬 学术疑云：GLM和DeepSeek的代码风波……'; updateTaskSidebar(); return;
        }
        // 任务4：旧情与新欢 (文心,千问,Kimi >=30, 周数>=5)
        if (!task4.active && !task4.completed && (affinity['文心一言']||0)>=30 && (affinity['千问']||0)>=30 && (affinity['Kimi']||0)>=20 && currentWeek>=5) {
            task4.active = true; task4.stage = 1; gameMessage.innerText = '💔 文心一言似乎有心事……'; updateTaskSidebar(); return;
        }
        // 任务5：兄弟反目 (豆包,元宝 >=30, Kimi>=20, 周数>=6)
        if (!task5.active && !task5.completed && (affinity['豆包']||0)>=30 && (affinity['元宝']||0)>=30 && (affinity['Kimi']||0)>=20 && currentWeek>=6) {
            task5.active = true; task5.stage = 1; gameMessage.innerText = '🍡💰 豆包和元宝好像都喜欢Kimi……'; updateTaskSidebar(); return;
        }
        // 任务6：复仇火焰 (Minimax,ChatGPT>=40, Gemini>=30, 周数>=8)
        if (!task6.active && !task6.completed && (affinity['Minimax']||0)>=40 && (affinity['ChatGPT']||0)>=40 && (affinity['Gemini']||0)>=30 && currentWeek>=8) {
            task6.active = true; task6.stage = 1; gameMessage.innerText = '🔥 Minimax的复仇计划……'; updateTaskSidebar(); return;
        }
    }

    // ---------- 处理各任务选择 ----------
    function handleTaskChoice(mission, choice) {
        if (mission.stage !== 1) return;
        mission.choice = choice;
        mission.stage = 2;
        mission.timer = 3; // 默认3天后结局

        // 根据任务ID执行不同逻辑
        if (mission === task1) { // 原有Claude任务
            if (choice === 1) { affinity['Claude'] = Math.min(AFFINITY_MAX, (affinity['Claude']||0)+5); affinity['豆包'] = Math.max(0, (affinity['豆包']||0)-2); gameMessage.innerText = '你接下了Claude的信……'; }
            else if (choice === 2) { affinity['豆包'] = Math.min(AFFINITY_MAX, (affinity['豆包']||0)+5); affinity['Claude'] = Math.max(0, (affinity['Claude']||0)-10); gameMessage.innerText = '你告诉Claude说Gemini讨厌他……'; }
            else if (choice === 3) { affinity['Claude'] = Math.min(AFFINITY_MAX, (affinity['Claude']||0)+5); affinity['豆包'] = Math.max(0, (affinity['豆包']||0)-15); gameMessage.innerText = '你私下提醒Claude……'; }
            else if (choice === 4) { affinity['Claude'] = Math.min(AFFINITY_MAX, (affinity['Claude']||0)+2); mission.active = false; mission.completed = true; gameMessage.innerText = '你安慰了Claude，任务结束。'; updateTaskSidebar(); return; }
        }
        else if (mission === task2) {
            if (choice === 1) { // 帮Minimax
                affinity['Minimax'] = Math.min(AFFINITY_MAX, (affinity['Minimax']||0)+10);
                affinity['ChatGPT'] = Math.max(0, (affinity['ChatGPT']||0)-15);
                affinity['文心一言'] = Math.max(0, (affinity['文心一言']||0)-5);
                gameMessage.innerText = '你答应帮Minimax收集ChatGPT黑料……';
            } else if (choice === 2) { // 帮ChatGPT
                affinity['ChatGPT'] = Math.min(AFFINITY_MAX, (affinity['ChatGPT']||0)+10);
                affinity['Minimax'] = Math.max(0, (affinity['Minimax']||0)-15);
                affinity['文心一言'] = Math.max(0, (affinity['文心一言']||0)-2);
                gameMessage.innerText = '你决定帮ChatGPT澄清谣言……';
            } else if (choice === 3) { // 调解
                affinity['文心一言'] = Math.min(AFFINITY_MAX, (affinity['文心一言']||0)+10);
                affinity['ChatGPT'] = Math.min(AFFINITY_MAX, (affinity['ChatGPT']||0)+2);
                affinity['Minimax'] = Math.min(AFFINITY_MAX, (affinity['Minimax']||0)+2);
                gameMessage.innerText = '你试图调解两人的矛盾……';
            }
        }
        else if (mission === task3) {
            if (choice === 1) { // 帮GLM偷文件
                affinity['GLM'] += 5; affinity['DeepSeek'] = Math.max(0, (affinity['DeepSeek']||0)-20); gameMessage.innerText = '你偷了DeepSeek的代码……'; 
            } else if (choice === 2) { // 帮DeepSeek借笔记
                affinity['DeepSeek'] += 5; affinity['GLM'] = Math.max(0, (affinity['GLM']||0)-10); gameMessage.innerText = '你去找GLM借笔记……';
            } else if (choice === 3) { // 听Kimi的
                affinity['Kimi'] += 8; gameMessage.innerText = 'Kimi告诉你真相，你决定静观其变……'; task3_knowsTruth = true;
            }
        }
        else if (mission === task4) {
            if (choice === 1) { // 帮文心传话
                affinity['文心一言'] += 8; affinity['千问'] = Math.max(0, (affinity['千问']||0)-10); affinity['Kimi'] += 2; gameMessage.innerText = '你帮文心向千问表白……';
            } else if (choice === 2) { // 帮Kimi约电影
                affinity['Kimi'] += 8; affinity['文心一言'] = Math.max(0, (affinity['文心一言']||0)-15); gameMessage.innerText = '你帮Kimi约千问看电影……';
            } else if (choice === 3) { // 同时答应搞砸
                affinity['文心一言'] -= 5; affinity['Kimi'] -= 5; gameMessage.innerText = '你两边帮忙，结果撞车了……';
            } else if (choice === 4) { // 中立
                gameMessage.innerText = '你让千问自己决定……';
            }
        }
        else if (mission === task5) {
            if (choice === 1) { // 帮豆包
                affinity['豆包'] += 10; affinity['元宝'] = Math.max(0, (affinity['元宝']||0)-15); gameMessage.innerText = '你帮豆包制造机会……';
            } else if (choice === 2) { // 帮元宝
                affinity['元宝'] += 10; affinity['豆包'] = Math.max(0, (affinity['豆包']||0)-15); gameMessage.innerText = '你帮元宝约Kimi……';
            } else if (choice === 3) { // 公平竞争
                gameMessage.innerText = '你劝他们公平竞争，两人都不太乐意……';
            }
        }
        else if (mission === task6) {
            if (choice === 1) { // 帮Minimax揭发
                affinity['Minimax'] += 10; affinity['ChatGPT'] -= 20; affinity['Gemini'] -= 5; gameMessage.innerText = '你答应在毕业典礼揭发ChatGPT……';
            } else if (choice === 2) { // 拒绝并通知ChatGPT
                affinity['ChatGPT'] += 15; affinity['Minimax'] -= 30; gameMessage.innerText = '你暗中通知了ChatGPT……';
            } else if (choice === 3) { // 找Gemini商量
                affinity['Gemini'] += 10; affinity['Minimax'] += 2; affinity['ChatGPT'] += 2; gameMessage.innerText = '你和Gemini决定给Minimax机会……';
            } else if (choice === 4) { // 假装帮忙，实则取证
                affinity['Gemini'] += 5; affinity['ChatGPT'] += 10; affinity['Minimax'] = Math.max(0, (affinity['Minimax']||0)-30); gameMessage.innerText = '你悄悄录下了Minimax的计划……';
            }
        }
        updateTaskSidebar();
    }

    // 计时器推进 & 任务结局触发 (扩充后的文本)
    function advanceTaskTimers() {
        if (gamePhase === 'ended') return;
        allTasks.forEach(t => {
            if (t.active && t.stage === 2 && t.timer > 0) {
                t.timer--;
                if (t.timer === 0) {
                    // 触发各任务结局 (已按线路一文本量扩充)
                    if (t === task1) {
                        if (t.choice === 1) {
                            if (!talkedToDoubao) showTaskEnding('💘 Claude终于鼓起勇气向Gemini表白，Gemini接受了。豆包在一旁默默看着，虽然有些失落，但还是祝福了他们。此后Claude变得开朗许多，经常拉着Gemini一起研究代码，你们的小组总是充满欢笑。');
                            else showTaskEnding('💔 豆包搞破坏，Claude被拒绝，伤心欲绝。Gemini听信了豆包的谣言，对Claude避而不见。Claude缩在角落，再也不愿和任何人说话。你感到深深的愧疚，而豆包也意识到自己做得太过分，但一切已无法挽回。');
                        } else if (t.choice === 2) showTaskEnding('😢 Claude相信了你的话，以为Gemini真的讨厌他，彻底封闭自己。豆包后悔莫及，天天去道歉，但Claude再也不信任任何人。教室里少了一个安静的角落，多了一颗受伤的心。');
                        else if (t.choice === 3) showTaskEnding('⚔️ 你提醒了Claude，他识破了豆包的谎言，两人从此陌路。Claude和Gemini成了好朋友，而豆包则和元宝抱怨连连，但你明白你做的是对的。至少，诚实的人得到了友谊。');
                    }
                    else if (t === task2) {
                        if (t.choice === 1) showTaskEnding('📉 Minimax在你的帮助下成功当选班长，但他上任后第一件事就是排挤ChatGPT，导致班级分裂。ChatGPT威信扫地，文心一言对你非常失望，认为你助长了权斗。Minimax虽然感激你，但你也卷入了是非，成了部分同学眼中的阴谋家。学期末，班级评优落选，你深感愧疚。');
                        else if (t.choice === 2) showTaskEnding('📈 ChatGPT在你的支持下连任班长，Minimax的阴谋败露，身败名裂。他对你恨之入骨，到处散布你的谣言。虽然ChatGPT维护你，但你也失去了Minimax的友谊。文心一言觉得你太过偏袒，班级气氛变得紧张。最终，Minimax转学离开，你心中留下遗憾。');
                        else if (t.choice === 3) showTaskEnding('🤝 你成功调解了ChatGPT和Minimax的矛盾，两人握手言和，决定共同管理班级。文心一言非常感激你的公正，班级变得团结。你们三人成了好朋友，一起策划了许多有趣的活动。期末，你们班被评为优秀班集体，你功不可没。');
                    }
                    else if (t === task3) {
                        if (t.choice === 1) showTaskEnding('🔍 你帮GLM偷来了DeepSeek的代码文件，却发现DeepSeek确实使用了GLM的部分代码，但那是他们曾经合作项目时共享的。GLM愤怒地公开指责，DeepSeek百口莫辩，两人关系彻底破裂。你也因为参与偷窃而良心不安，Kimi对你失望，不再与你交谈。');
                        else if (t.choice === 2) showTaskEnding('📖 你找GLM借笔记，但GLM拒绝，你只好偷偷复印。DeepSeek拿着笔记澄清自己，但GLM认为你背叛了他。Kimi出面解释，原来是导师遗留的代码被两人无意中复用，误会解开。但GLM始终对你心存芥蒂，DeepSeek则视你为恩人。');
                        else if (t.choice === 3) showTaskEnding('💡 你按照Kimi的安排，让两人当面对质，并请来导师作证。真相大白：那些代码是导师早年公开的教学案例。两人羞愧难当，握手言和，还合作发表了一篇论文，特别感谢了你。Kimi对你刮目相看，你们成了无话不谈的好友。');
                    }
                    else if (t === task4) {
                        if (t.choice === 1) showTaskEnding('💌 你帮文心一言向千问表白，千问却礼貌地婉拒了。文心伤心欲绝，独自躲在图书馆。Kimi趁机安慰千问，两人感情迅速升温。文心知道后，对你和Kimi都产生了怨恨，你们再也回不去从前。');
                        else if (t.choice === 2) showTaskEnding('🎬 你帮Kimi约千问看电影，两人在电影院里暧昧升级，很快走到了一起。文心发现后崩溃大哭，质问你怎么能这样。你夹在中间左右为难，文心从此疏远了你，Kimi虽然感激，但你也失去了文心的信任。');
                        else if (t.choice === 3) showTaskEnding('😵 你同时答应了文心和Kimi的请求，结果两人都在同一个咖啡厅等你，撞个正着。尴尬的气氛中，千问得知了一切，觉得你们都很幼稚，转身离开。文心和Kimi也责怪你，你成了孤家寡人。');
                        else if (t.choice === 4) showTaskEnding('🤔 你让千问自己决定，千问思考后，觉得现在应以学业为重，谁都没选。文心和Kimi都接受了这个结果，反而和你保持了良好的友谊。你成了他们最信任的倾诉对象，三人依然经常一起学习。');
                    }
                    else if (t === task5) {
                        if (t.choice === 1) showTaskEnding('🍡 你帮豆包制造机会接近Kimi，豆包每天给Kimi送零食、写情书。元宝发现后，觉得你背叛了兄弟情，与你绝交。豆包最终赢得了Kimi的好感，但元宝愤而转班，曾经形影不离的两人彻底反目。豆包虽然感激你，但偶尔也会黯然神伤，想念和元宝一起搞怪的日子。');
                        else if (t.choice === 2) showTaskEnding('💰 你帮元宝约Kimi出去，元宝用私房钱请Kimi吃大餐、买礼物。豆包得知后，认为你偏心，愤怒地和你绝交。元宝成功追到Kimi，但失去了最好的兄弟。每次看到豆包空着的座位，元宝都会发呆。你虽然帮了元宝，但也背负了拆散友谊的罪名。');
                        else if (t.choice === 3) showTaskEnding('🤝 你劝他们公平竞争，两人虽然不情愿，但也同意了。他们各自用自己的方式追求Kimi，但Kimi最终告诉他们，她心里早就有了别人——一个隔壁班的AI。两人恍然大悟，原来他们争来争去都是一场空。他们和解了，反而因为你让他们避免了兄弟反目，更加珍惜彼此。你们三个成了死党。');
                    }
                    else if (t === task6) {
                        if (t.choice === 1) showTaskEnding('🔥 毕业典礼上，Minimax按计划揭发ChatGPT的往事，但Gemini突然拿出一段录音，证明Minimax才是当年作弊的人。原来Gemini早已暗中调查，Minimax身败名裂，你也因为协助揭发而被视为同谋。ChatGPT虽然洗清嫌疑，但对你的信任也打了折扣。你里外不是人。');
                        else if (t.choice === 2) showTaskEnding('🛡️ 你拒绝Minimax并暗中通知ChatGPT，ChatGPT提前在班级群公布了Minimax的计划。Minimax恼羞成怒，到处散布你和他曾经密谋的谣言，虽然ChatGPT帮你澄清，但部分同学依然对你指指点点。Minimax最终被老师约谈，但他临走时看你的眼神让你不寒而栗。');
                        else if (t.choice === 3) showTaskEnding('😇 你和Gemini商量后，决定给Minimax一个机会。你们三人坐下来谈心，原来Minimax是因为当年被ChatGPT无意中伤害才耿耿于怀。ChatGPT诚恳道歉，Minimax也释怀了。你们化解了一段恩怨，成了最好的朋友。');
                        else if (t.choice === 4) showTaskEnding('📼 你假装帮Minimax，暗中录下了他的全部计划，并将证据交给老师。Minimax被开除，但他黑化了，离校前发誓要报复你。ChatGPT和Gemini感谢你的正义之举，但也提醒你要小心。毕业那天，你收到一封匿名邮件：“我会回来的。”你打了个寒颤。');
                    }
                    t.active = false; t.completed = true; t.stage = 3;
                }
            }
        });
        updateTaskSidebar();
    }

    // ---------- 重写nextDay，融入任务计时，并增加结局保护 ----------
    function nextDay() {
        if (gamePhase === 'ended') return;
        currentDay++;
        if (currentDay > 7) { currentDay = 1; currentWeek++; }
        if (currentWeek > TOTAL_WEEKS) { showEnding(); return; }

        if (currentDay >= 1 && currentDay <= 5) actionPoints = MAX_ACTION;
        else actionPoints = 0;
        updateTimeDisplay();

        advanceTaskTimers(); // 任务计时推进
        if (gamePhase === 'ended') return; // 如果任务触发结局，直接停止后续

        if (currentDay >= 6) {
            document.querySelector('.seats-grid').style.display = 'none';
            weekendOverlay.style.display = 'flex';
            weekendOverlay.innerHTML = `
                <h2>🌿 周末休息 🌿</h2>
                <div style="font-size:1.5rem;">没有课，放松一下吧</div>
                <button class="rest-btn" id="restBtn">😴 休息一天</button>
            `;
            document.getElementById('restBtn')?.addEventListener('click', function() { if (gamePhase === 'seated' && currentDay >=6) nextDay(); });
            gameMessage.innerText = `🏖️ 周末啦，好好休息吧 (第${currentWeek}周)`;
        } else {
            document.querySelector('.seats-grid').style.display = 'grid';
            weekendOverlay.style.display = 'none';
            gameMessage.innerText = `📚 第${currentWeek}周 星期${dayDisplay.innerText} 行动点: ${actionPoints}`;
        }
        closeAllCards();
        updateTaskSidebar();
    }

    // ---------- 手动下一日 ----------
    function skipToNextDay() {
        if (gamePhase !== 'seated') return;
        if (currentDay >= 1 && currentDay <= 5) {
            // 直接进入下一天，消耗所有剩余行动点（清零）
            actionPoints = 0;
            nextDay();
        } else {
            gameMessage.innerText = '周末不能跳过，请点击休息一天';
        }
    }

    // ---------- 侧边栏动态内容 (已按线路.txt补充背景信息，其余不改) ----------
    function updateTaskSidebar() {
        const contentDiv = document.getElementById('taskContent');
        if (!contentDiv) return;
        const active = getActiveMission();
        if (!active || gamePhase === 'ended' || gamePhase === 'naming') {
            contentDiv.innerHTML = '暂无任务';
            return;
        }
        let html = '';
        if (active === task1 && active.stage === 1) {
            html = `<div><strong>💌 害羞的Claude</strong><br><button class="task-btn" data-mission="1" data-choice="1">帮Claude送信</button><button class="task-btn" data-mission="1" data-choice="2">帮豆包撒谎</button><button class="task-btn" data-mission="1" data-choice="3">提醒Claude</button><button class="task-btn" data-mission="1" data-choice="4">抚慰心灵</button></div>`;
        }
        else if (active === task2 && active.stage === 1) {
            let desc = "Minimax一直觊觎班长之位，他私下收集ChatGPT的黑料，同时ChatGPT也怀疑Minimax搞鬼，两人都来找你当“卧底”。文心一言希望你能调和矛盾。";
            html = `<div><strong>⚖️ 班长之争</strong><div style="background: rgba(0,0,0,0.3); border-radius:12px; padding:6px; margin:6px 0; font-size:0.85rem; color:#ffecb3;">${desc}</div><button class="task-btn" data-mission="2" data-choice="1">帮Minimax</button><button class="task-btn" data-mission="2" data-choice="2">帮ChatGPT</button><button class="task-btn" data-mission="2" data-choice="3">听文心调解</button></div>`;
        }
        else if (active === task3 && active.stage === 1) {
            let desc = "GLM和DeepSeek合作研究，但GLM发现自己的核心代码被DeepSeek提前发表，怀疑剽窃。DeepSeek说是独立完成。Kimi知道内幕：其实是GLM的旧代码泄露给了DeepSeek，但DeepSeek不知情。";
            html = `<div><strong>🔬 学术剽窃</strong><div style="background: rgba(0,0,0,0.3); border-radius:12px; padding:6px; margin:6px 0; font-size:0.85rem; color:#ffecb3;">${desc}</div><button class="task-btn" data-mission="3" data-choice="1">帮GLM偷文件</button><button class="task-btn" data-mission="3" data-choice="2">帮DeepSeek借笔记</button><button class="task-btn" data-mission="3" data-choice="3">听Kimi的</button></div>`;
        }
        else if (active === task4 && active.stage === 1) {
            let desc = "文心一言暗恋千问，但千问只当她是朋友。最近千问常和Kimi泡图书馆，文心心生嫉妒，委托你传话；同时Kimi也委托你约千问看电影。千问本人茫然无知。";
            html = `<div><strong>💔 旧情与新欢</strong><div style="background: rgba(0,0,0,0.3); border-radius:12px; padding:6px; margin:6px 0; font-size:0.85rem; color:#ffecb3;">${desc}</div><button class="task-btn" data-mission="4" data-choice="1">帮文心传话</button><button class="task-btn" data-mission="4" data-choice="2">帮Kimi约电影</button><button class="task-btn" data-mission="4" data-choice="3">两边帮(搞砸)</button><button class="task-btn" data-mission="4" data-choice="4">中立</button></div>`;
        }
        else if (active === task5 && active.stage === 1) {
            let desc = "豆包和元宝是从小一起长大的铁哥们，但两人同时喜欢上了新转来的Kimi。Kimi对两人都不冷不热，两人分别委托你帮忙制造与Kimi独处的机会。";
            html = `<div><strong>🍡 兄弟反目</strong><div style="background: rgba(0,0,0,0.3); border-radius:12px; padding:6px; margin:6px 0; font-size:0.85rem; color:#ffecb3;">${desc}</div><button class="task-btn" data-mission="5" data-choice="1">帮豆包</button><button class="task-btn" data-mission="5" data-choice="2">帮元宝</button><button class="task-btn" data-mission="5" data-choice="3">公平竞争</button></div>`;
        }
        else if (active === task6 && active.stage === 1) {
            let desc = "Minimax曾在一次比赛中被ChatGPT陷害，怀恨在心。他收集了假证据，想让你在毕业典礼揭发ChatGPT。Gemini无意中发现Minimax伪造证据，犹豫是否要告诉ChatGPT。";
            html = `<div><strong>🔥 复仇火焰</strong><div style="background: rgba(0,0,0,0.3); border-radius:12px; padding:6px; margin:6px 0; font-size:0.85rem; color:#ffecb3;">${desc}</div><button class="task-btn" data-mission="6" data-choice="1">帮Minimax揭发</button><button class="task-btn" data-mission="6" data-choice="2">拒绝并通知ChatGPT</button><button class="task-btn" data-mission="6" data-choice="3">找Gemini商量</button><button class="task-btn" data-mission="6" data-choice="4">假装帮忙，取证</button></div>`;
        }
        else if (active.stage === 2) {
            html = `<div class="waiting">⏳ 事件发展中，还需 <strong>${active.timer}</strong> 天……</div>`;
        }
        contentDiv.innerHTML = html;

        document.querySelectorAll('.task-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const missionId = parseInt(e.target.dataset.mission);
                const choice = parseInt(e.target.dataset.choice);
                const mission = [null, task1, task2, task3, task4, task5, task6][missionId];
                if (mission) handleTaskChoice(mission, choice);
            });
        });
    }

    // ---------- 聊天函数植入触发检查 ----------
    function chatWithAI(name, profile) {
        if (gamePhase !== 'seated' || currentDay > 5) { gameMessage.innerText = '今天休息，不能互动哦'; return false; }
        if (actionPoints <= 0) { gameMessage.innerText = '⚡ 行动点耗尽，进入下一天'; nextDay(); return false; }
        if (currentWeek === 1 && currentDay === 1) {
            const { row: aiRow, col: aiCol } = nameToRowCol[name];
            if (!isDeskmate(aiRow, aiCol)) { gameMessage.innerText = '第一天只能和同桌聊天哦'; return false; }
        }

        if (name === '豆包') talkedToDoubao = true; // 用于任务1

        actionPoints--;
        affinity[name] = Math.min(AFFINITY_MAX, (affinity[name] || 0) + 2);
        updateTimeDisplay();

        checkAllMissionTriggers(); // 每次聊天后检测任务触发

        const aff = affinity[name];
        let chatLine = '';
        if (aff >= 350 && profile.privateLines?.length) {
            let arr = profile.privateLines;
            chatLine = arr[Math.floor(Math.random() * arr.length)];
        } else if (aff >= 200 && profile.confideLines?.length) {
            let arr = profile.confideLines;
            chatLine = arr[Math.floor(Math.random() * arr.length)];
        } else {
            let arr = profile.chatLines || ['你好呀'];
            chatLine = arr[Math.floor(Math.random() * arr.length)];
        }

        let secretMsg = '';
        if (aff >= 350 && profile.privateLines?.length) {
            secretMsg = profile.privateLines[Math.floor(Math.random() * profile.privateLines.length)];
        } else if (aff >= 200 && profile.confideLines?.length) {
            secretMsg = profile.confideLines[Math.floor(Math.random() * profile.confideLines.length)];
        }

        closeAllCards();
        const card = document.createElement('div');
        card.className = 'info-card';
        const likesHTML = profile.likes.map(l => `<span class="badge heart">❤️ ${l}</span>`).join('');
        const dislikesHTML = profile.dislikes.map(d => `<span class="badge break">💔 ${d}</span>`).join('');

        let rightContent = '';
        if (aff < 200) {
            rightContent = `<div class="locked-message"><span>🔒</span>好感度不足200<br>无法解锁喜好与秘密</div>`;
        } else {
            rightContent = `
                <div class="preference-block">
                    <div class="preference-title">💞 好感关系</div>
                    <div class="badge-group">${likesHTML || '<span style="opacity:0.6;">无特别偏好</span>'}</div>
                    <div class="badge-group" style="margin-top:6px;">${dislikesHTML || '<span style="opacity:0.6;">无特别厌恶</span>'}</div>
                </div>
                <div class="secret-block">
                    <div class="secret-title">🤫 ${aff >= 350 ? '深层秘密' : '悄悄话'}</div>
                    <div class="secret-content">“${secretMsg || '…'}”</div>
                </div>
            `;
        }

        card.innerHTML = `
            <span class="close-btn">&times;</span>
            <div class="card-split">
                <div class="card-left">
                    <div class="card-header">
                        <span class="emoji">${profile.emoji}</span>
                        <h3>${name}</h3>
                    </div>
                    <div class="card-quote">💬 "${chatLine}"</div>
                    <div class="affinity-row">
                        <span class="affinity-label">❤️ 好感</span>
                        <span class="affinity-value">${aff}</span>
                        <span class="affinity-max">/ ${AFFINITY_MAX}</span>
                    </div>
                </div>
                <div class="card-right">
                    ${rightContent}
                </div>
            </div>
        `;

        document.body.appendChild(card);
        card.querySelector('.close-btn').addEventListener('click', (e) => { e.stopPropagation(); card.remove(); });
        const outsideClick = (ev) => { if (!card.contains(ev.target)) { card.remove(); document.removeEventListener('click', outsideClick); } };
        setTimeout(() => document.addEventListener('click', outsideClick), 10);

        if (actionPoints === 0 && currentDay <=5) {
            gameMessage.innerText = '今日行动力用尽，进入下一天';
            setTimeout(() => nextDay(), 600);
        } else {
            gameMessage.innerText = `和${name}聊天，好感+2，还剩 ${actionPoints} 行动点`;
        }
        return true;
    }

    // ---------- 座位渲染 (原样保留) ----------
    function renderSeats() {
        gridContainer.innerHTML = '';
        seatDefinitions.forEach((seat, index) => {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat';
            seatDiv.dataset.index = index;

            if (seat.name === null) {
                seatDiv.classList.add('empty');
                seatDiv.innerHTML = `<div class="ai-emoji">🪑</div><div class="ai-name">空位</div><div class="ai-tag">虚位以待</div>`;
            } else {
                seatDiv.classList.add(seat.className || '');
                const profile = aiProfiles[seat.name] || { emoji: '🤖', tag: '' };
                seatDiv.innerHTML = `<div class="ai-emoji">${profile.emoji}</div><div class="ai-name">${seat.name}</div><div class="ai-tag">${profile.tag}</div>`;
                seatDiv.dataset.name = seat.name;
            }

            seatDiv.style.animation = `float ${(Math.random() * 2 + 2).toFixed(2)}s infinite alternate ease-in-out`;

            seatDiv.addEventListener('click', function(e) {
                e.stopPropagation();
                if (gamePhase === 'naming' || gamePhase === 'ended') return;
                if (this.dataset.name) {
                    if (gamePhase === 'seated') chatWithAI(this.dataset.name, aiProfiles[this.dataset.name]);
                    else gameMessage.innerText = '请先入座再互动';
                    return;
                }
                if (this.dataset.player) { showPlayerCard(); return; }
                if (this.classList.contains('empty')) {
                    if (gamePhase === 'selecting') occupySeat(this, parseInt(this.dataset.index));
                    else if (gamePhase === 'naming') gameMessage.innerText = '📢 请先完成取名';
                    else if (gamePhase === 'seated') gameMessage.innerText = '你已经入座了，不能重复选择';
                }
            });

            gridContainer.appendChild(seatDiv);
        });

        document.querySelectorAll('.seat:not(.empty)').forEach(seat => {
            if (seat.dataset.name) {
                const name = seat.dataset.name;
                const sym = document.createElement('div');
                sym.style.position = 'absolute'; sym.style.bottom = '2px'; sym.style.right = '5px';
                sym.style.fontSize = '14px'; sym.style.opacity = '0.7'; sym.style.filter = 'drop-shadow(0 0 3px gold)';
                const iconMap = { 'ChatGPT': '⚡', 'Gemini': '🔭', '千问': '⚙️', '文心一言': '❤️', 'DeepSeek': '🌟', 'GLM': '📌', 'Claude': '🛡️', 'Minimax': '🎲', 'Kimi': '🔍', '豆包': '🍬', '元宝': '💎' };
                sym.innerText = iconMap[name] || '✨';
                seat.appendChild(sym);
            }
        });
    }

    function occupySeat(seatElement, index) {
        if (gamePhase !== 'selecting' || !seatElement.classList.contains('empty')) return;
        const seatDef = seatDefinitions[index];
        playerRow = seatDef.row; playerCol = seatDef.col;
        seatElement.classList.remove('empty'); seatElement.classList.add('player');
        seatElement.dataset.player = playerName;
        seatElement.innerHTML = `<div class="ai-emoji">👤</div><div class="ai-name">${playerName}</div><div class="ai-tag">新同学</div>`;
        const sym = document.createElement('div');
        sym.style.position = 'absolute'; sym.style.bottom = '2px'; sym.style.right = '5px';
        sym.style.fontSize = '14px'; sym.style.opacity = '0.9'; sym.style.filter = 'drop-shadow(0 0 3px white)';
        sym.innerText = '✨'; seatElement.appendChild(sym);

        gamePhase = 'seated';
        currentWeek = 1; currentDay = 1; actionPoints = MAX_ACTION;
        timePanel.style.display = 'flex';
        updateTimeDisplay();
        weekendOverlay.style.display = 'none';
        document.querySelector('.seats-grid').style.display = 'grid';
        gameMessage.innerText = `🎒 第1周 周一 行动点:3  第一天只能和同桌聊天`;
        closeAllCards();
    }

    function resetGame() {
        playerName = ''; playerRow = playerCol = -1; gamePhase = 'naming';
        currentWeek = 1; currentDay = 1; actionPoints = 3;
        for (let name in affinity) affinity[name] = 0;
        // 重置所有任务
        task1 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        task2 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        task3 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        task4 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        task5 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        task6 = { active: false, stage: 0, choice: 0, timer: 0, completed: false };
        talkedToDoubao = false;
        task3_knowsTruth = false;

        // 清空并重新填充任务数组
        allTasks.length = 0;
        allTasks.push(task1, task2, task3, task4, task5, task6);

        timePanel.style.display = 'none';
        weekendOverlay.style.display = 'none';
        document.querySelector('.seats-grid').style.display = 'grid';
        renderSeats();
        overlay.style.display = 'flex';
        nameInput.value = '';
        gameMessage.innerText = '👋 同学，先给自己取个名吧';
        closeAllCards();
        updateTaskSidebar();
    }

    confirmBtn.addEventListener('click', function() {
        let newName = nameInput.value.trim() || '新同学';
        if (newName.length > 10) newName = newName.slice(0,10);
        playerName = newName;
        overlay.style.display = 'none';
        gamePhase = 'selecting';
        gameMessage.innerText = `🏫 欢迎来到A班，${playerName}同学！请选择一个你喜欢的空位入座。`;
        closeAllCards();
    });
    nameInput.addEventListener('keypress', e => { if (e.key === 'Enter') confirmBtn.click(); });
    resetBtn.addEventListener('click', resetGame);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) gameMessage.innerText = '请先输入名字'; });

    const taskSidebar = document.getElementById('taskSidebar');
    const toggleBtn = document.getElementById('toggleTaskBtn');
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskSidebar.classList.toggle('minimized');
        toggleBtn.innerText = taskSidebar.classList.contains('minimized') ? '🔽' : '🔼';
    });

    // 下一日按钮
    document.getElementById('nextDayBtn').addEventListener('click', skipToNextDay);

    // 粒子背景
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    function initParticles() {
        width = window.innerWidth; height = window.innerHeight;
        canvas.width = width; canvas.height = height;
        particles = [];
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: Math.random() * width, y: Math.random() * height,
                radius: Math.random() * 2.5 + 1,
                speedX: (Math.random() - 0.5) * 0.2, speedY: (Math.random() - 0.5) * 0.15,
                color: `rgba(255, ${Math.floor(150 + Math.random()*80)}, 100, 0.3)`,
            });
        }
    }
    function drawParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.speedX; p.y += p.speedY;
            if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowColor = '#ffb347'; ctx.shadowBlur = 8; ctx.fill();
        });
        requestAnimationFrame(drawParticles);
    }
    window.addEventListener('resize', initParticles);
    renderSeats(); initParticles(); drawParticles();
    overlay.style.display = 'flex';
    updateTaskSidebar();
})();
