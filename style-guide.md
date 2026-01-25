# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

---

## Colors

### White
- **HEX**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **HSL**: `hsl(0°, 100%, 100%)`

### Grey System

#### Grey 900 (가장 진한 회색 - 제목용)
- **HEX**: `#48556A`
- **RGB**: `72, 85, 106`
- **HSL**: `hsl(217°, 19%, 35%)`
- **용도**: 제목, 강조 텍스트
- **기존 이름**: Very Dark Grayish Blue

#### Grey 500 (중간 회색 - 본문용)
- **HEX**: `#6E8098`
- **RGB**: `110, 128, 152`
- **HSL**: `hsl(214°, 17%, 51%)`
- **용도**: 본문 텍스트
- **기존 이름**: Desaturated Dark Blue

#### Grey 400 (연한 회색 - 날짜/부가정보용)
- **HEX**: `#9DAEC2`
- **RGB**: `157, 174, 194`
- **HSL**: `hsl(212°, 23%, 69%)`
- **용도**: 날짜, 부가 정보
- **기존 이름**: Grayish Blue

#### Grey 200 (아주 연한 회색 - 배경용)
- **HEX**: `#ECF2F8`
- **RGB**: `236, 242, 248`
- **HSL**: `hsl(210°, 46%, 95%)`
- **용도**: 페이지 배경, 버튼 배경
- **기존 이름**: Light Grayish Blue

---

## Typography

### Font Family
- **Primary**: [Manrope](https://fonts.google.com/specimen/Manrope)
- **Weights**: 500 (Medium), 700 (Bold)

### Text Presets

#### Text Preset 1 (Bold) - 제목용
- **Font Size**: 20px
- **Line Height**: 130% (26px)
- **Letter Spacing**: 0.25px
- **Font Weight**: 700 (Bold)
- **Font Family**: Manrope Bold
- **용도**: 카드 제목, 주요 헤딩

#### Text Preset 2 (Bold) - 작은 제목용
- **Font Size**: 13px
- **Line Height**: 140% (18.2px)
- **Letter Spacing**: 0.12% (약 0.016px)
- **Font Weight**: 700 (Bold)
- **Font Family**: Manrope Bold
- **용도**: 작성자 이름, 강조 텍스트

#### Text Preset 2 (Medium) - 본문용
- **Font Size**: 13px
- **Line Height**: 140% (18.2px)
- **Letter Spacing**: 0.12% (약 0.016px)
- **Font Weight**: 500 (Medium)
- **Font Family**: Manrope Medium
- **용도**: 일반 본문, 설명 텍스트

#### Text Preset 3 (Regular) - 대문자/강조용
- **Font Size**: 13px
- **Line Height**: 140% (18.2px)
- **Letter Spacing**: 25% (약 3.25px)
- **Font Weight**: 500 (Medium)
- **Font Family**: Manrope
- **용도**: 대문자 레이블, 강조 텍스트 (SHARE 버튼 등)

---

## Spacing

디자인 시스템의 일관된 간격을 위한 스페이싱 스케일입니다.

| Name | Pixels | Tailwind Class | 용도 예시 |
|------|--------|----------------|-----------|
| spacing-0 | 0px | `p-0`, `m-0` | 여백 제거 |
| spacing-200 | 16px | `p-4`, `m-4` | 작은 여백 |
| spacing-300 | 24px | `p-6`, `m-6` | 중간 여백 |
| spacing-400 | 32px | `p-8`, `m-8` | 카드 내부 여백 |
| spacing-500 | 40px | `p-10`, `m-10` | 큰 여백 |
| spacing-600 | 48px | `p-12`, `m-12` | 섹션 간격 |
| spacing-700 | 56px | `p-14`, `m-14` | 넓은 간격 |
| spacing-800 | 64px | `p-16`, `m-16` | 매우 넓은 간격 |
| spacing-1300 | 104px | `p-[104px]`, `m-[104px]` | 특별한 레이아웃 |
| spacing-2000 | 160px | `p-[160px]`, `m-[160px]` | 대형 섹션 간격 |

> 💡 **Tip**: Tailwind CSS의 기본 스페이싱은 4px 단위입니다. 
> - `p-4` = 16px (padding)
> - `m-6` = 24px (margin)
> - `gap-8` = 32px (flex/grid gap)

---

## Icons

We provide SVGs for the social icons. But please feel free to use a font icon library if you like. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

---

## Design Tokens Summary

### 🎨 Colors
```css
/* 제목 */ color: #48556A;
/* 본문 */ color: #6E8098;
/* 날짜 */ color: #9DAEC2;
/* 배경 */ background: #ECF2F8;
```

### 📝 Typography
```css
/* 제목 */ font: 700 20px/130% Manrope;
/* 본문 */ font: 500 13px/140% Manrope;
/* 이름 */ font: 700 13px/140% Manrope;
```

### 📏 Spacing
```css
/* 기본 여백 */ padding: 32px; /* spacing-400 */
/* 큰 여백 */ padding: 40px; /* spacing-500 */
/* 작은 간격 */ gap: 16px; /* spacing-200 */
```

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.
