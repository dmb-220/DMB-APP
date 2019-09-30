<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CSV extends Model
{
    public function getUrlAttribute() {
        if (empty($this->file)) {
            return null;
        }

        return Storage::url($this->file);
    }
}
