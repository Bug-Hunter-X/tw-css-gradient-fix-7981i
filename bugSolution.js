```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <p>This is some text with a gradient background.</p>
</div>

/* Fallback solution for older browsers */
<div style="background-image: linear-gradient(to right, #6366F1, #A855F7); padding: 1rem; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
  <p>This is a fallback for browsers not supporting Tailwind's gradient functionality.</p>
</div>
```