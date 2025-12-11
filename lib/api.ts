// lib/api.ts

// Reusable fetch wrapper with error + timeout handling
async function apiRequest<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000); // 10 sec timeout

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 }, // optional caching improvement
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data as T;

  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw new Error(error.message || "Something went wrong while fetching data");
  } finally {
    clearTimeout(timeout);
  }
}

// Get all products
export async function getProducts() {
  return apiRequest<any[]>("https://fakestoreapi.com/products");
}

// Get single product
export async function getProduct(id: string) {
  return apiRequest<any>(`https://fakestoreapi.com/products/${id}`);
}
