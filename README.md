# HomiInvoice

**فارسی** | [English](#english)

فاکتورساز ساده و دوزبانه در یک فایل `index.html` (بدون فریم‌ورک و بدون CDN).

## امکانات
- اطلاعات فروشنده و خریدار، جدول اقلام (افزودن/حذف)، تخفیف و مالیات، جمع کل
- مبلغ به حروف فارسی («ریال» یا «تومان»)
- تاریخ شمسی امروز (قابل ویرایش) و شماره‌ی فاکتور خودکار
- رابط فارسی/انگلیسی (با تغییر جهت صفحه) و حالت تاریک
- چاپ / ذخیره PDF در اندازه‌ی A4
- ذخیره‌ی خودکار در مرورگر (localStorage) و خروجی/ورودی JSON

## استفاده
فایل `index.html` را در مرورگر باز کنید. برای PDF دکمه‌ی «چاپ / PDF» را بزنید و مقصد را «Save as PDF» بگذارید.

## تست
```
node test/numtowords.test.js
```

## English
A simple bilingual invoice maker in a single `index.html` (no framework, no CDN; Vazirmatn font is optional and falls back to system fonts).

**Features:** seller/buyer details, line items, discount and tax, totals, amount in Persian words (Rial or Toman), today's Persian (Jalali) date (editable), auto invoice number, FA/EN UI with RTL/LTR switching, dark mode, A4 print/PDF, autosave to localStorage, JSON export/import.

**Usage:** open `index.html` in a browser; use "Print / PDF" and choose "Save as PDF".

**Test:** `node test/numtowords.test.js`

## License
See [LICENSE](LICENSE).
