import { db } from './firebase';
import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";


// Menü kaydetme fonksiyonu
export const saveMenu = async (menu) => {
  try {
    const menuDocRef = doc(db, "gunlukMenu", "menu");
    
    // Menü zaten varsa, sadece güncellemeye çalışıyoruz
    const docSnap = await getDoc(menuDocRef);
    if (!docSnap.exists()) {
      // Menü verisi yoksa, yeni bir belge oluşturuyoruz
      await setDoc(menuDocRef, {
        menu: menu,
        timestamp: new Date(),
      });
      console.log("Menü başarıyla kaydedildi!");
    } else {
      console.log("Menü zaten var.");
    }
  } catch (e) {
    console.error("Menü kaydedilirken hata oluştu: ", e);
  }
};

export const addProductToMenu = async (product) => {
    const menuRef = doc(db, "gunlukMenu", "menu");
  
    try {
      const menuDoc = await getDoc(menuRef);
      
      if (menuDoc.exists()) {
        // Menü verisini alıyoruz
        const currentMenu = menuDoc.data().menu || [];  // Eğer 'menu' verisi yoksa boş bir array kullanıyoruz
        const updatedMenu = [...currentMenu, product];  // Yeni ürünü ekliyoruz
  
        // Menü verisini güncelliyoruz
        await setDoc(menuRef, {
          menu: updatedMenu  // Menü verisini güncelleyerek kaydediyoruz
        }, { merge: true });
  
        console.log("Ürün başarıyla eklendi!");
      } else {
        // Menü verisi yoksa, yeni bir belge oluşturuyoruz
        await setDoc(menuRef, {
          menu: [product],  // İlk ürünü ekliyoruz
        });
  
        console.log("Yeni menü verisi oluşturuldu!");
      }
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
    }
  };
  
// Ürün silme fonksiyonu
export const removeProductFromMenu = async (productIndex) => {
  try {
    const menuDocRef = doc(db, "gunlukMenu", "menu");

    // Mevcut menüyü çekiyoruz
    const docSnap = await getDoc(menuDocRef);
    let menuData = [];

    if (docSnap.exists()) {
      menuData = docSnap.data().menu || [];  // Menü varsa, boş değilse alıyoruz
    } else {
      console.log("Menü verisi bulunamadı.");
      return;  // Menü yoksa işlem yapma
    }

    // Silmek istediğimiz ürünü çıkarıyoruz
    const updatedMenu = menuData.filter((_, index) => index !== productIndex);

    // Yeni menüyü Firestore'a kaydediyoruz
    await updateDoc(menuDocRef, {
      menu: updatedMenu
    });

    console.log("Ürün başarıyla silindi!");
  } catch (e) {
    console.error("Ürün silinirken hata oluştu: ", e);
  }
};

// Menü verisini okuma fonksiyonu
export const fetchMenu = async () => {
  const docRef = doc(db, "gunlukMenu", "menu");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Günlük Menü: ", docSnap.data().menu);
    return docSnap.data().menu;
  } else {
    console.log("Menü verisi bulunamadı!");
    return [];  // Menü yoksa boş bir dizi döndürüyoruz
  }
};
