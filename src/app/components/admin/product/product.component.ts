import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: FormGroup;
  file: File | null = null;
  submitted = false;
  comment: string = ''
  products: any = [];
  constructor(private fb: FormBuilder, private ps: ProductService) { 
    this.form = fb.group({

    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  get f(){
    return this.form.controls;
  }

  handleFileInput(evnet: any) {debugger;
    console.log(evnet);
    
    this.file = evnet.target.files.item(0);
}

  onSubmit(){
    this.submitted = true;
    let data = {
      "comment": this.comment
    }
    this.ps.saveProduct(data, this.file)
    .subscribe(res=>{debugger;
      console.log(res);
      
    }, err=>{debugger;
      console.log(err);
      
    })
  }

  getAll(){debugger;
    this.ps.getAll()
    .subscribe(res=>{debugger;
      console.log(res);   
      this.products = res;   
    }, err=>{debugger;
      console.log(err);
      
    })
  }


}
